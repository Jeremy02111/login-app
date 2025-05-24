import React from 'react';

function UserProfile({ token }) {
  const payload = JSON.parse(atob(token.split('.')[1]));

  return (
    <div className="card p-4 mt-4 shadow-sm text-center">
      <h2 className="text-primary mb-3">Bienvenido, {payload.username} 👋</h2>
      <p><strong>Rol:</strong> {payload.role}</p>
      <p><strong>ID:</strong> {payload.sub}</p>
    </div>
  );
}

export default UserProfile;

