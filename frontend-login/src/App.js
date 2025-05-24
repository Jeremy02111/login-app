// Importa React y componentes
import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import RegisterForm from './components/RegisterForm';
import UserProfile from './components/UserProfile';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [role, setRole] = useState(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setRole(payload.role);
    }
  }, [token]);

  const handleLoginSuccess = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    setRefresh(!refresh);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setRole(null);
  };

  const refreshUsers = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Sistema de Login</h1>

      {!token ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <button onClick={handleLogout} style={{ float: 'right' }}>
            Cerrar sesión
          </button>

          {role === 'admin' ? (
            <>
              <RegisterForm token={token} onUserAdded={refreshUsers} />
              <UserList token={token} key={refresh} />
            </>
          ) : (
            <UserProfile token={token} />
          )}
        </>
      )}
    </div>
  );
}

export default App;

