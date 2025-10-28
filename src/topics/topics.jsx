import React from "react";
import { NavLink } from "react-router-dom";
import "./topics.css";

const TOPICS = [
  "Celebrities",
  "Politics",
  "Food & Drinks",
  "Lifestyle",
  "Sports",
  "Cultures",
];

export function Topics() {
  return (
    <main className="topics-page">
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Hot Topics</h2>
        </div>

        <div className="row g-4">
          {TOPICS.map((t) => (
            <div className="col-12 col-md-6" key={t}>
              <div className="card topic-card shadow-sm">
                <div className="card-body text-center">
                  <NavLink
                    to={`/play?category=${encodeURIComponent(t)}`}
                    className="stretched-link text-decoration-none fw-semibold"
                    aria-label={`Open ${t} hot takes`}
                  >
                    {t}
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
