import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/authService';

function UserList({ token }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getUsers(token);
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener usuarios', error);
      }
    };
    fetch();
  }, [token]);

  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-white"
      style={{
        background: 'linear-gradient(135deg, #09203f, #537895)',
        padding: '40px',
      }}
    >
      <div className="mb-4 text-center">
        <h2 className="display-5 fw-bold">Usuarios Registrados</h2>
        <p className="lead">Listado completo de cuentas</p>
      </div>

      <div className="w-100" style={{ maxWidth: '800px' }}>
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              className="card mb-3 shadow-lg"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="card-body">
                <h5 className="card-title mb-2">
                  {user.full_name} <small className="text-info">({user.username})</small>
                </h5>
                <p className="card-text mb-0">
                  <strong>Rol:</strong> {user.role}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-light">No hay usuarios registrados.</p>
        )}
      </div>
    </div>
  );
}

export default UserList;
