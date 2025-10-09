import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Topics } from './topics/topics';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
    <div>
    <header>
      <h1>Vote Hot Takes<sup>&reg;</sup></h1>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand" href="#">Vote Hot Takes</h1>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <NavLink className="nav-link" aria-current="page" to=''>Home</NavLink>
              <NavLink className="nav-link" to='topics'>Topics</NavLink>
              <NavLink className="nav-link" to='play'>Play</NavLink>
              <NavLink className="nav-link" to='scores'>Scores</NavLink>
              <NavLink className="nav-link" to='about'>About</NavLink>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </header>

    <Routes>
      <Route path='/' element={<Login />} exact />
      <Route path='/topics' element={<Topics />} />
      <Route path='/play' element={<Play />} />
      <Route path='/scores' element={<Scores />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>

    <footer className="bg-dark text-white-50">
      <div className="container-fluid">
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