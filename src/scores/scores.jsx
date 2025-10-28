import React from 'react';
import './scores.css';
import { getAggregatedScores, seedDemoVotes } from "../scores/scoreService";

export function Scores() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    // demo data for first run; remove in prod
    seedDemoVotes();

    setRows(getAggregatedScores());

    // If you later add live updates (e.g., after voting elsewhere),
    // you could listen to storage events or use a context to refresh here.
    // window.addEventListener('storage', () => setRows(getAggregatedScores()));
    // return () => window.removeEventListener('storage', ...);
  }, []);

  return (
    <main className="scores-page container-fluid bg-secondary py-4">
      <div className="table-responsive">
        <table className="table table-warning table-striped-columns align-middle">
          <thead className="table-dark">
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Topic</th>
              <th>Last Vote</th>
              <th style={{ width: 260 }}>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center">No votes yet</td>
              </tr>
            )}

            {rows.map((r, i) => {
              const total = r.yes + r.no || 1;
              const yesPct = Math.round((r.yes / total) * 100);
              const noPct = 100 - yesPct;
              const lastVote = r.yes >= r.no ? 'Yes' : 'No';

              return (
                <tr key={i}>
                  <td>{r.category}</td>
                  <td>{r.name}</td>
                  <td>{r.topic}</td>
                  <td>{lastVote}</td>
                  <td>
                    <div className="progress vh-30">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${yesPct}%` }}
                        aria-valuenow={yesPct}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {yesPct}%
                      </div>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: `${noPct}%` }}
                        aria-valuenow={noPct}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        {noPct}%
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-light mt-3">Votes are stored locally. Hook an API later for real-time.</p>
    </main>
  );
}