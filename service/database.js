const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');

const userCollection = db.collection('user');
const voteCollection = db.collection('vote'); 

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log('Connected to database');
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

// --- users (auth) ---
function getUser(email) {
  return userCollection.findOne({ email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

// --- votes ---
async function addVote(vote) {
  await voteCollection.insertOne(vote);
}

async function getAllVotes() {
  const cursor = voteCollection.find({});
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addVote,
  getAllVotes,
};
