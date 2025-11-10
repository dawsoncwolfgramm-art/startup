import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Topics } from './topics/topics';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';


export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = React.useState(
    userName ? AuthState.Authenticated : AuthState.Unauthenticated
  );

  React.useEffect(() => {
    setAuthState(userName ? AuthState.Authenticated : AuthState.Unauthenticated);
  }, [userName]);

  const handleAuthChange = (nextUserName, nextAuthState) => {
    setUserName(nextUserName);
    setAuthState(nextAuthState);

    if (nextAuthState === AuthState.Authenticated && nextUserName) {
      localStorage.setItem('userName', nextUserName);
    } else {
      localStorage.removeItem('userName');
    }
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-light border-bottom">
          <div className="container py-3">
            <h1 className="h3 mb-0">Vote Hot Takes<sup>&reg;</sup></h1>
          </div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <NavLink className="navbar-brand" to="/">Vote Hot Takes</NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                  <NavLink className="nav-link" to="/" end>
                    Home
                  </NavLink>

                  {authState === AuthState.Authenticated && (
                    <>
                      <NavLink className="nav-link" to="/topics">Topics</NavLink>
                      <NavLink className="nav-link" to="/play">Play</NavLink>
                      <NavLink className="nav-link" to="/scores">Scores</NavLink>
                    </>
                  )}

                  <NavLink className="nav-link" to="/about">About</NavLink>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  userName={userName}
                  authState={authState}
                  onAuthChange={handleAuthChange}
                />
              }
            />
            <Route path="/topics" element={<Topics userName={userName} />} />
            <Route path="/play" element={<Play userName={userName} />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white-50 mt-auto">
          <div className="container d-flex gap-3 py-2 justify-content-between">
            <span className="text-reset">Dawson Wolfgramm</span>
            <a className="text-reset" href="https://github.com/dawsoncwolfgramm-art/startup">
              My GitHub
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container py-5 text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}
