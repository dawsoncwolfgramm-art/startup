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
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div >
        <header>
          <h1>Vote Hot Takes<sup>&reg;</sup></h1>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              {/* brand kept in place, just changed to an anchor */}
              <a className="navbar-brand" href="#">Vote Hot Takes</a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"           // ✅ BS5
                data-bs-target="#navbarNavAltMarkup" // ✅ BS5
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto"> {/* ✅ ml-auto → ms-auto */}
                  <NavLink className="nav-link" aria-current="page" to=''>
                    Home
                  </NavLink>

                  {authState === AuthState.Authenticated && (
                    <NavLink className="nav-link" to='topics'>
                      Topics
                    </NavLink>
                  )}
                  {authState === AuthState.Authenticated && (
                    <NavLink className="nav-link" to='play'>
                      Play
                    </NavLink>
                  )}
                  {authState === AuthState.Authenticated && (
                    <NavLink className="nav-link" to='scores'>
                      Scores
                    </NavLink>
                  )}

                  <NavLink className="nav-link" to='about'>
                    About
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>

          <hr />
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                username={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setUserName(userName);
                  setAuthState(authState);
                }}
              />
            }
          />
          <Route path='/topics' element={<Topics userName={userName} />} />
          <Route path='/play' element={<Play />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className="bg-dark text-white-50 mt-auto">
          <div className="container-fluid d-flex gap-3 py-2">
            <span className="text-reset">Dawson Wolfgramm</span>
            <a className="text-reset" href="https://github.com/dawsoncwolfgramm-art/startup">My GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}