import React, { useState } from 'react';
import { registerUser } from '../services/authService';

function RegisterForm({ token, onUserAdded }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    full_name: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(token, formData);
      setSuccess('Usuario registrado exitosamente');
      setError('');
      setFormData({ username: '', password: '', full_name: '' });
      onUserAdded();
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="card p-4 mb-4 shadow-sm">
      <h3 className="mb-3">Registrar nuevo usuario</h3>
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="username" placeholder="Usuario" value={formData.username} onChange={handleChange} required />
        <input className="form-control mb-3" name="password" type="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
        <input className="form-control mb-3" name="full_name" placeholder="Nombre completo" value={formData.full_name} onChange={handleChange} required />
        <button className="btn btn-success w-100" type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterForm;
