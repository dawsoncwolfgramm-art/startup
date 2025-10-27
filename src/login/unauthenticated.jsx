import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName || '');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser(e) {
    e.preventDefault();

    const u = userName.trim();
    const p = password;

    if (!u || !p) {
      setDisplayError('Please enter both username and password.');
      return;
    }

    // Persist and notify parent to flip auth state
    localStorage.setItem('userName', u);
    props.onLogin?.(u);
  }

  async function createUser(e) {
    e.preventDefault();

    const u = userName.trim();
    const p = password;
    const cp = confirmPassword;

    if (!u || !p || !cp) {
      setDisplayError('Please fill out all fields to create an account.');
      return;
    }

    if (p !== cp) {
      setDisplayError('Passwords do not match.');
      return;
    }

    // If you later wire an API, do it here; on success, log in:
    localStorage.setItem('userName', u);
    props.onLogin?.(u);
  }

  return (
    <>
      <Form onSubmit={props.isSignup ? createUser : loginUser}>
        <Form.Group className="mb-3" controlId={props.isSignup ? 'signupEmail' : 'loginEmail'}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete={props.isSignup ? 'email' : 'username'}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId={props.isSignup ? 'signupPassword' : 'loginPassword'}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={props.isSignup ? 'new-password' : 'current-password'}
          />
        </Form.Group>

        {props.isSignup && (
          <Form.Group className="mb-3" controlId="signupConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
          </Form.Group>
        )}

        <Button
          variant={props.isSignup ? 'success' : 'primary'}
          type="submit"
          className="w-100"
        >
          {props.isSignup ? 'Sign Up' : 'Login'}
        </Button>
      </Form>

      <MessageDialog
        message={displayError}
        onHide={() => setDisplayError(null)}
      />
    </>
  );
}
