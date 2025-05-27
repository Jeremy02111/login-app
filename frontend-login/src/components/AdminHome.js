import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
  const navigate = useNavigate();

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center text-white"
      style={{
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
        padding: '20px',
      }}
    >
      <div
        className="p-5 rounded shadow-lg text-center"
        style={{
          maxWidth: '500px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <h2 className="mb-4 text-info">Bienvenido, Administrador 👑</h2>
        <p className="mb-4">Selecciona una opción para continuar:</p>

        <div className="d-grid gap-3">
          <button
            className="btn btn-outline-light py-3 rounded-pill"
            onClick={() => navigate('/registrar')}
          >
            <i className="bi bi-person-plus-fill me-2"></i> Registrar Cliente
          </button>
          <button
            className="btn btn-outline-light py-3 rounded-pill"
            onClick={() => navigate('/clientes')}
          >
            <i className="bi bi-people-fill me-2"></i> Ver Todos los Clientes
          </button>
        </div>

        <div className="mt-4">
          <small className="text-light">Panel de administración © 2025</small>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
