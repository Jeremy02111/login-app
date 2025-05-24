import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/authService';

function UserList({ token }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getUsers(token)
      .then(setUsers)
      .catch(err => setError(err.message));
  }, [token]);

  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Usuarios registrados</h4>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            <strong>{user.full_name}</strong> ({user.username}) – Rol: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
