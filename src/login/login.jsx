import React from 'react';
import './login.css';

export function Login() {
  return (
    <main>
      <h1>Welcome to Vote a Hot Take</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card p-4">
              {/* <!-- Tabs --> */}
              <ul className="nav nav-tabs mb-3" id="authTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab">Login</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab">Sign Up</button>
                </li>
              </ul>
              
              <div className="tab-content" id="authTabContent">
                {/* <!-- Login Form --> */}
                <div className="tab-pane fade show active" id="login" role="tabpanel">
                  <form>
                    <div className="mb-3">
                      <label for="loginEmail" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="loginEmail" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                      <label for="loginPassword" className="form-label">Password</label>
                      <input type="password" className="form-control" id="loginPassword" placeholder="Password" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                      <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                  </form>
                </div>
                
                {/* <!-- Sign Up Form --> */}
                <div className="tab-pane fade" id="signup" role="tabpanel">
                  <h4 className="mb-3">Create Account ✨</h4>
                  <form>
                    <div className="mb-3">
                      <label for="signupName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="signupName" placeholder="John Doe" />
                    </div>
                    <div className="mb-3">
                      <label for="signupEmail" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="signupEmail" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                      <label for="signupPassword" className="form-label">Password</label>
                      <input type="password" className="form-control" id="signupPassword" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                      <label for="signupConfirm" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="signupConfirm" placeholder="Confirm password" />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Sign Up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <p> this will be added in the database</p>  
      <h2>Vote Your Hot Take?</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card poll-card p-4">
              <div className="poll-statement mb-3">
                Travis Kelce made Taylor Swift Famous?
              </div>
              <form method="get" action="play.html" className="d-grid gap-3">
                <button type="submit" className="btn btn-agree btn-lg">AGREE</button>
                <button type="submit" className="btn btn-disagree btn-lg">DISAGREE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}