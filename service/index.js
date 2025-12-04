const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const DB = require('./database.js');
const app = express();
const { peerProxy } = require('./peerProxy.js');


const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting (for production build)
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).send({ msg: 'Missing email or password' });
  }

  if (await findUser('email', email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(email, password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body || {};
  const user = await findUser('email', email);
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
    await DB.updateUser(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// Record a single vote (no auth required right now)
apiRouter.post('/vote', async (req, res) => {
  const { category, topic, vote, name } = req.body || {};
  if (!category || !topic || !vote) {
    return res.status(400).send({ msg: 'Missing category, topic, or vote' });
  }

  const email = name || 'anonymous@local';   // simple identifier

  console.log('Saving vote:', { email, category, topic, vote }); // DEBUG

  await DB.addVote({
    email,
    category,
    topic,
    vote,           // 'Yes' | 'No'
    ts: new Date().toISOString(),
  });

  res.status(201).send({ ok: true });
});

// Get aggregated scores for all votes (no auth required right now)
apiRouter.get('/scores', async (_req, res) => {
  const votes = await DB.getAllVotes();

  console.log('Loaded votes:', votes.length); 

  // Aggregate into { category, name, topic, yes, no }
  const map = new Map();

  for (const v of votes) {
    const key = `${v.category}__${v.email}__${v.topic}`;
    if (!map.has(key)) {
      map.set(key, {
        category: v.category,
        name: v.email,
        topic: v.topic,
        yes: 0,
        no: 0,
      });
    }
    const row = map.get(key);
    if ((v.vote || '').toLowerCase() === 'yes') row.yes += 1;
    else row.no += 1;
  }

  const rows = Array.from(map.values());
  res.send(rows);
});

// Default error handler
app.use(function (err, _req, res, _next) {
  console.error(err);
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);
  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  const isProd = process.env.NODE_ENV === 'production';
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: isProd,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Start the HTTP server and keep a reference for WebSocket
const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Attach the WebSocket peer proxy
peerProxy(httpService);