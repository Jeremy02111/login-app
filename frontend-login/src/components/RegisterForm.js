import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm({ token, onUserAdded }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
    full_name: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/users/register', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Usuario registrado exitosamente');
      setError('');
      setForm({ username: '', password: '', full_name: '' });
      onUserAdded && onUserAdded();
    } catch (err) {
      setError('Error al registrar usuario');
      setMessage('');
    }
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: 'linear-gradient(135deg, #1f4068, #2a5298)',
        backgroundSize: 'cover',
        overflow: 'hidden',
      }}
    >
      <div
        className="p-5 rounded"
        style={{
          width: '400px',
          backdropFilter: 'blur(12px)',
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <div className="text-center mb-4">
          <i className="bi bi-person-plus" style={{ fontSize: '3rem' }}></i>
          <h4 className="mt-2">Registrar Usuario</h4>
        </div>

        {message && <div className="alert alert-success text-center">{message}</div>}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="full_name"
              placeholder="Nombre completo"
              value={form.full_name}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Usuario"
              value={form.username}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'transparent', color: 'white' }}
            />
          </div>
          <button type="submit" className="btn btn-info w-100 rounded-pill">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
