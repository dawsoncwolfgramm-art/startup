import React from "react";
import "./scores.css";

export function Scores() {
  return (
    <main className="container-fluid bg-secondary py-4">
      <div className="table-responsive">
        <table className="table table-warning table-striped-columns align-middle">
          <thead className="table-dark">
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Topic</th>
              <th>Vote</th>
              <th style={{ width: 260 }}>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Celebrities</td>
              <td>Dawson Wolfgramm</td>
              <td>Travis Kelce made Taylor Swift famous?</td>
              <td>Yes</td>
              <td>
                <div className="progress" style={{ height: 30 }}>
                  {/* Agree bar */}
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    75%
                  </div>
                  {/* Disagree bar */}
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    25%
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Celebrities</td>
              <td>Shae Cloward</td>
              <td>Travis Kelce made Taylor Swift famous?</td>
              <td>No</td>
              <td>
                <div className="progress" style={{ height: 30 }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    25%
                  </div>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    75%
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Celebrities</td>
              <td>Lauren McMillin</td>
              <td>Travis Kelce made Taylor Swift famous?</td>
              <td>Yes</td>
              <td>
                <div className="progress" style={{ height: 30 }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    75%
                  </div>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    25%
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Celebrities</td>
              <td>Savanah Hafer</td>
              <td>Travis Kelce made Taylor Swift famous?</td>
              <td>Yes</td>
              <td>
                <div className="progress" style={{ height: 30 }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    75%
                  </div>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    25%
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Politics</td>
              <td>Dawson Wolfgramm</td>
              <td>Socialism is better than Capitalism?</td>
              <td>No</td>
              <td>
                <div className="progress" style={{ height: 30 }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    50%
                  </div>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    50%
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Politics</td>
              <td>Savanah Hafer</td>
              <td>Socialism is better than Capitalism?</td>
              <td>Yes</td>
              <td>
                <div className="progress" style={{ height: 30 }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    50%
                  </div>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    50%
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-light mt-3">This will be added in the database.</p>
    </main>
  );
}
