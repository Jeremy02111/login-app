import React from 'react';

function UserProfile({ token }) {
  const payload = JSON.parse(atob(token.split('.')[1]));

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card p-5 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="text-center">
          <i className="bi bi-person-circle" style={{ fontSize: '5rem', color: '#0d6efd' }}></i>
          <h2 className="text-primary mt-3 mb-1">Bienvenido, {payload.username} 👋</h2>
          <p className="text-muted mb-4">Has iniciado sesión como usuario estándar</p>
        </div>

        <hr />

        <div className="px-3">
          <div className="mb-3">
            <strong>Rol:</strong>{' '}
            <span className={`badge bg-${payload.role === 'admin' ? 'danger' : 'secondary'}`}>
              {payload.role}
            </span>
          </div>
          <div className="mb-3">
            <strong>ID de Usuario:</strong> {payload.sub}
          </div>
        </div>

        <hr />

        <div className="text-center mt-4">
          <p className="text-muted small mb-1">Sistema de Login Seguro © 2025</p>
          <i className="bi bi-lock-fill text-secondary"></i>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
