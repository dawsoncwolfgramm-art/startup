import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }


  return (
    <div>
      <Card className="p-4 shadow-sm">
        <h3 className="mb-3 text-primary">Welcome back {props.userName}!</h3>
        <div className="d-grid gap-2">
          <Button variant="success" size="lg" onClick={() => navigate('/play')}>
            Start Voting
          </Button>
          <Button variant="outline-secondary" size="lg" onClick={logout}>
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
}
