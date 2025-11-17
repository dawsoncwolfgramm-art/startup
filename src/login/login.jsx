import React from 'react';
import './login.css';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="text-center wrapper flex-grow-1">
      {authState !== AuthState.Unkown && <h1>Welcome to Vote a Hot Take</h1>}
      
      {authState === AuthState.Authenticated && (
        <Authenticated
          userName={userName}
          onLogout={() => onAuthChange('', AuthState.Unauthenticated)}
        />
      )}
      {authState === AuthState.Unauthenticated && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card p-4">
                {/* Tabs */}
                <ul className="nav nav-tabs mb-3" id="authTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="login-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#login"
                      type="button"
                      role="tab"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="signup-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#signup"
                      type="button"
                      role="tab"
                    >
                      Sign Up
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="authTabContent">
                  {/* Login form uses Unauthenticated component */}
                  <div className="tab-pane fade show active" id="login" role="tabpanel">
                    <Unauthenticated
                      userName={userName}
                      onLogin={(loginUserName) =>
                        onAuthChange(loginUserName, AuthState.Authenticated)
                      }
                    />
                  </div>

                  <div className="tab-pane fade" id="signup" role="tabpanel">
                    <Unauthenticated
                      userName={userName}
                      onLogin={(loginUserName) =>
                        onAuthChange(loginUserName, AuthState.Authenticated)
                      }
                      isSignup={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}