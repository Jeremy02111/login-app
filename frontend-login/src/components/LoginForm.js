import React, { useState } from 'react';
import { login } from '../services/authService';

function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      localStorage.setItem('token', token);
      setError('');
      onLoginSuccess(token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
    className="vh-100 d-flex justify-content-center align-items-center"
    style={{
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // Fondo azul moderno
      backgroundSize: 'cover',
       overflow: 'hidden'
    }}
  >
    <div
      className="p-5 rounded"
      style={{
        width: '350px',
        backdropFilter: 'blur(15px)',
        background: 'rgba(255, 255, 255, 0.05)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.2)',
      }}
    >
      <div className="text-center mb-4">
        <i className="bi bi-person-circle" style={{ fontSize: '4rem', color: '#00c6ff' }}></i>
        <h4 className="mt-2">Iniciar Sesión</h4>
      </div>

      {error && <p className="text-danger text-center">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          />
        </div>
        <button
          type="submit"
          className="btn w-100 rounded-pill"
          style={{
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
          }}
        >
          LOGIN
        </button>
      </form>
    </div>
  </div>
);
}

export default LoginForm;
