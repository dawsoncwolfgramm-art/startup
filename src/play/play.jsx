import React from 'react';
import './play.css';
import { NavLink } from 'react-router';

export function Play() {
  return (
    <main>
      <div className="share-simple text-center my-4">
        <h5>Share this</h5>
        <div className="d-flex justify-content-center gap-2">
          {/* <!-- Facebook --> */}
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
            target="_blank" className="btn btn-primary">Facebook</a>

          {/* <!-- Twitter --> */}
          <a href="https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Check%20this%20out"
            target="_blank" className="btn btn-info text-white">Twitter</a>

          {/* <!-- Messanger --> */}
          <a href="https://www.facebook.com/dialog/send?link=https://yourwebsite.com&app_id=123456789&redirect_uri=https://yourwebsite.com"
            target="_blank" className="btn" style="background-color: green; color: white;">Messenger</a>

          {/* <!-- Instagram --> */}
          <a href="https://www.instagram.com/"
            target="_blank" className="btn btn-danger">Instagram</a>

          {/* <!-- Copy Link --> */}
          <button id="copyLinkBtn" className="btn btn-secondary">Copy Link</button>
        </div>
      </div>

      <section className="row g-2 mb-3 align-items-center">
        <div className="col-12 col-md-auto">
          <strong>Category:</strong>
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Celebrities
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="play.html?category=Celebrities">Celebrities</a>
              <a className="dropdown-item" href="play.html?category=Politics">Politics</a>
              <a className="dropdown-item" href="play.html?category=Food%20%26%20Drinks">Food & Drinks</a>
              <a className="dropdown-item" href="play.html?category=Lifestyle">Lifestyle</a>
              <a className="dropdown-item" href="play.html?category=Sports">Sports</a>
              <a className="dropdown-item" href="play.html?category=Cultures">Cultures</a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-auto">
          <strong>Participant:</strong> <span id="participantName">Dawson</span>
        </div>
      </section>

      {/* <!-- Activity feed --> */}
      <section className="mb-4">
        <ul className="notification">
          <li className="Participant-name">Dawson has joined the link</li>
          <li className="Participant-name">Savanah has joined the link</li>
          <li className="Participant-name">Dawson has voted YES!</li>
          <li className="Participant-name">Shae has joined the link</li>
        </ul>
      </section>

      <h2>Vote Your Hot Take?</h2>
      <div className="poll-card p-4">
        <div className="poll-statement mb-3">
          Travis Kelce made Taylor Swift Famous?
        </div>
        <form method="get" action="play.html" className="d-grid gap-3">
          <button type="submit" className="btn btn-agree btn-lg">AGREE</button>
          <button type="submit" className="btn btn-disagree btn-lg">DISAGREE</button>
        </form>
      </div>
      <a className="btn btn-primary" href="#" role="button">New Prompt</a>
      <input className="btn btn-primary" type="reset" value="Reset" />

      <br />

      <h4 className="mt-4 poll-result">Live Poll Results</h4>
      <div className="progress" style="height: 30px;">
        {/* <!-- Agree bar --> */}
        <div className="progress-bar bg-success" role="progressbar" style="width: 50%">
          50% Agree
        </div>
        {/* <!-- Disagree bar --> */}
        <div className="progress-bar bg-danger" role="progressbar" style="width: 50%">
          50% Disagree
        </div>
      </div>

      <br />

      <section className="card shadow-sm">
        <div className="card-header">
          <h5 className="mb-0">Live chat:</h5>
        </div>
        <div className="card-body">
          <ul id="chatList" className="notification mb-3">
            <li className="Participant-name">I dont think that Taylor got any more famous than when she wasn't with Travis - Dawson Wolfgramm</li>
            <li className="Participant-name">I know she gained at least 1 million more followers because of Travis Kelsey - Shae Cloward</li>
          </ul>

          <form id="chatForm" className="form-floating">
            <textarea id="chatInput" className="form-control" placeholder="Leave a comment here" style="height: 100px"></textarea>
            <label for="chatInput">Comments</label>
            <div className="text-end mt-2">
              <button type="submit" className="btn btn-primary">Post</button>
            </div>
          </form>

          <small className="text-muted d-block mt-3">This will be added in the database.</small>
        </div>
      </section>
    </main>
  );
}