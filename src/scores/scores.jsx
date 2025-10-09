import React from 'react';
import './scores.css';

export function Scores() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Topic</th>
            <th>Vote</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Celebrities</td>
            <td>Dawson Wolfgramm</td>
            <td>Travic Kelce made Taylor Swift Famous?</td>
            <td>Yes</td>
            <td>
              <div className="progress" style="height: 30px;">
                {/* <!-- Agree bar --> */}
                <div className="progress-bar bg-success" role="progressbar" style="width: 75%">
                  75%
                </div>
                {/* <!-- Disagree bar --> */}
                <div className="progress-bar bg-danger" role="progressbar" style="width: 25%">
                  25%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Celebrities</td>
            <td>Shae Cloward</td>
            <td>Travic Kelce made Taylor Swift Famous?</td>
            <td>No</td>
            <td>
              <div className="progress" style="height: 30px;">
                {/* <!-- Agree bar --> */}
                <div className="progress-bar bg-success" role="progressbar" style="width: 25%">
                  25%
                </div>
                {/* <!-- Disagree bar --> */}
                <div className="progress-bar bg-danger" role="progressbar" style="width: 75%">
                  75%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Celebrities</td>
            <td>Lauren McMillin</td>
            <td>Travic Kelce made Taylor Swift Famous?</td>
            <td>Yes</td>
            <td>
              <div className="progress" style="height: 30px;">
                {/* <!-- Agree bar --> */}
                <div className="progress-bar bg-success" role="progressbar" style="width: 75%">
                  75%
                </div>
                {/* <!-- Disagree bar --> */}
                <div className="progress-bar bg-danger" role="progressbar" style="width: 25%">
                  25%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Celebrities</td>
            <td>Savanah Hafer</td>
            <td>Travic Kelce made Taylor Swift Famous?</td>
            <td>Yes</td>
            <td>
              <div className="progress" style="height: 30px;">
                {/* <!-- Agree bar --> */}
                <div className="progress-bar bg-success" role="progressbar" style="width: 75%">
                  75%
                </div>
                {/* <!-- Disagree bar --> */}
                <div className="progress-bar bg-danger" role="progressbar" style="width: 25%">
                  25%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Polotics</td>
            <td>Dawson Wolfgramm</td>
            <td>Socialism is better than Capitalism?</td>
            <td>No</td>
            <td>
              <div className="progress" style="height: 30px;">
                {/* <!-- Agree bar --> */}
                <div className="progress-bar bg-success" role="progressbar" style="width: 50%">
                  50%
                </div>
                {/* <!-- Disagree bar --> */}
                <div className="progress-bar bg-danger" role="progressbar" style="width: 50%">
                  50%
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Polotics</td>
            <td>Savanah Hafer</td>
            <td>Socialism is better than Capitalism?</td>
            <td>Yes</td>
            <td>
              <div className="progress" style="height: 30px;">
                {/* <!-- Agree bar --> */}
                <div className="progress-bar bg-success" role="progressbar" style="width: 50%">
                  50%
                </div>
                {/* <!-- Disagree bar --> */}
                <div className="progress-bar bg-danger" role="progressbar" style="width: 50%">
                  50%
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p> this will be added in the database</p>
    </main>
  );
}