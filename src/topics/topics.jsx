import React from "react";
import { NavLink } from "react-router-dom";
import "./topics.css";

const TOPICS = [
  { name: "Celebrities" },
  { name: "Politics" },
  { name: "Food & Drinks" },
  { name: "Lifestyle" },
  { name: "Sports" },
  { name: "Cultures" },
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
            <div className="col-12 col-md-6" key={t.name}>
              <div className="card topic-card shadow-sm">
                <div className="card-body text-center">

                  <NavLink
                    to={`/play?category=${encodeURIComponent(t.name)}`}
                    className="stretched-link text-decoration-none fw-semibold"
                    aria-label={`Browse hot takes in ${t.name}`}
                  >
                    {t.name}
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
