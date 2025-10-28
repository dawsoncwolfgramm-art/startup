import React from "react";
import "./play.css";
import { NavLink } from "react-router-dom";
import { recordVote } from '../scores/scoreService';

// Example handler:
function onCastVote({ category, topic, vote }, userName) {
  recordVote({ category, topic, vote, name: userName });
  // optional: toast or navigate
}

export function Play() {
  return (
    <main>
      <div className="share-simple text-center my-4">
        <h5>Share this</h5>
        <div className="d-flex justify-content-center gap-2">
          {/* External links: use <a> */}
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Facebook
          </a>

          <a
            href="https://twitter.com/intent/tweet?url=https://yourwebsite.com&text=Check%20this%20out"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info text-white"
          >
            Twitter
          </a>

          <a
            href="https://www.facebook.com/dialog/send?link=https://yourwebsite.com&app_id=123456789&redirect_uri=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Messenger
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-danger"
          >
            Instagram
          </a>

          <button id="copyLinkBtn" className="btn btn-secondary">Copy Link</button>
        </div>
      </div>

      <section className="row g-2 mb-3 align-items-center text-start">
        <div className="col-12 col-md-auto">
          <strong>Category:</strong>
          <div className="btn-group">
            {/* If using Bootstrap 5: data-bs-toggle */}
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Celebrities
            </button>
            <div className="dropdown-menu">
              <NavLink className="dropdown-item" to="/play?category=Celebrities">Celebrities</NavLink>
              <NavLink className="dropdown-item" to="/play?category=Politics">Politics</NavLink>
              <NavLink className="dropdown-item" to="/play?category=Food%20%26%20Drinks">Food &amp; Drinks</NavLink>
              <NavLink className="dropdown-item" to="/play?category=Lifestyle">Lifestyle</NavLink>
              <NavLink className="dropdown-item" to="/play?category=Sports">Sports</NavLink>
              <NavLink className="dropdown-item" to="/play?category=Cultures">Cultures</NavLink>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-auto">
          <strong>Participant:</strong> <span id="participantName">Dawson</span>
        </div>
      </section>

      <section className="mb-4 text-start">
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
        {/* In SPA, avoid action="play.html" */}
        <form className="d-grid gap-3" onSubmit={(e) => e.preventDefault()}>
          <button type="button" className="btn btn-agree btn-lg">AGREE</button>
          <button type="button" className="btn btn-disagree btn-lg">DISAGREE</button>
        </form>
      </div>

      <button className="btn btn-primary" type="button">New Prompt</button>
      <button className="btn btn-primary" type="reset">Reset</button>

      <br />

      <h4 className="mt-4 poll-result">Live Poll Results</h4>
      <div className="progress" style={{ height: 30 }}>
        <div className="progress-bar bg-success" role="progressbar" style={{ width: "50%" }}>
          50% Agree
        </div>
        <div className="progress-bar bg-danger" role="progressbar" style={{ width: "50%" }}>
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
            <li className="Participant-name">
              I dont think that Taylor got any more famous than when she wasn't with Travis - Dawson Wolfgramm
            </li>
            <li className="Participant-name">
              I know she gained at least 1 million more followers because of Travis Kelsey - Shae Cloward
            </li>
          </ul>

          <form id="chatForm" className="form-floating" onSubmit={(e) => e.preventDefault()}>
            <textarea
              id="chatInput"
              className="form-control"
              placeholder="Leave a comment here"
              style={{ height: 100 }}
            />
            <label htmlFor="chatInput">Comments</label>
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
