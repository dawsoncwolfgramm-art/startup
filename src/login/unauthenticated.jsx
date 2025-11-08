import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName || '');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function loginUser(e) {
    e.preventDefault();
    const email = userName.trim();
    if (!email || !password) return setDisplayError('Please enter both email and password.');
    await loginOrCreate('/api/auth/login', { email, password });
  }

  async function createUser(e) {
    e.preventDefault();
    const email = userName.trim();
    if (!email || !password || !confirmPassword) {
      return setDisplayError('Please fill out all fields to create an account.');
    }
    if (password !== confirmPassword) {
      return setDisplayError('Passwords do not match.');
    }
    await loginOrCreate('/api/auth/create', { email, password });
  }

  async function loginOrCreate(endpoint, payload) {
    try {
      setLoading(true);
      setDisplayError(null);

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        localStorage.setItem('userName', payload.email);
        props.onLogin?.(payload.email);
      } else {
        let msg = 'Unknown error';
        try {
          const body = await res.json();
          msg = body?.msg || msg;
        } catch (_) {}
        setDisplayError(`⚠ Error: ${msg}`);
      }
    } catch (err) {
      setDisplayError(`⚠ Network error: ${err.message}`);
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            required
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
            disabled={loading}
            required
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
              disabled={loading}
              required
            />
          </Form.Group>
        )}

        <Button
          variant={props.isSignup ? 'success' : 'primary'}
          type="submit"
          className="w-100"
          disabled={loading}
        >
          {loading ? 'Please wait…' : props.isSignup ? 'Sign Up' : 'Login'}
        </Button>
      </Form>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}