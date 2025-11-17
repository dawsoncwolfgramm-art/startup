import React from 'react';
import './scores.css';

const API_BASE = ''; // same-origin since we dropped CORS

export function Scores() {
  const [rows, setRows] = React.useState([]);
  const [error, setError] = React.useState(null);   // ✅ ADD THIS

  React.useEffect(() => {
    async function loadScores() {
      try {
        const res = await fetch(`${API_BASE}/api/scores`);
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.msg || 'Failed to load scores');
        }
        const data = await res.json();
        setRows(data);
        setError(null);                             // ✅ clear previous errors
      } catch (err) {
        console.error(err);
        setError(err.message);                      // ✅ now defined
      }
    }
    loadScores();
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
            {error && (
              <tr>
                <td colSpan={5} className="text-center text-danger">
                  {error}
                </td>
              </tr>
            )}

            {!error && rows.length === 0 && (
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
                        style={{ width: `${yesPct}%` }}
                      >
                        {yesPct}%
                      </div>
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: `${noPct}%` }}
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
    </main>
  );
}
