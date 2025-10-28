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

    const user = userName.trim();
    const userPassword = password;

    if (!user || !userPassword) {
      setDisplayError('Please enter both username and password.');
      return;
    }

    localStorage.setItem('userName', user);
    props.onLogin?.(user);
  }

  async function createUser(e) {
    e.preventDefault();

    const user = userName.trim();
    const userPassword = password;
    const cp = confirmPassword;

    if (!user || !userPassword || !cp) {
      setDisplayError('Please fill out all fields to create an account.');
      return;
    }

    if (userPassword !== cp) {
      setDisplayError('Passwords do not match.');
      return;
    }

    localStorage.setItem('userName', user);
    props.onLogin?.(user);
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
