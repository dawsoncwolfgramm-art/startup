import React from 'react';
import './topics.css';

export function Topics() {
  return (
    <main>
    <div className="container my-4 container-lang">
      <div className="d-flex justify-content-between align-items-center mb-3 ">
        <h2>Hot Topics</h2>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card topic-card">
            <div className="card-body text-center">
              <a href="play.html" className="stretched-link">Celebrities</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card topic-card">
            <div className="card-body text-center">
              <a href="play.html" className="stretched-link">Politics</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card topic-card">
            <div className="card-body text-center">
              <a href="play.html" className="stretched-link">Food & Drinks</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card topic-card">
            <div className="card-body text-center">
              <a href="play.html" className="stretched-link">Lifestyle</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card topic-card">
            <div className="card-body text-center">
              <a href="play.html" className="stretched-link">Sports</a>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card topic-card">
            <div className="card-body text-center">
              <a href="play.html" className="stretched-link">Cultures</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}