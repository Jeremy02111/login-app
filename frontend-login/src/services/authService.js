import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';
//Manejo de errores y respuestas estándar
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data.access_token;
  } catch (error) {
    throw new Error('Credenciales inválidas');
  }
};

export const getUsers = async (token) => {
  try {
    const response = await axios.get('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('No se pudo obtener la lista de usuarios');
  }
};

export const registerUser = async (token, userData) => {
  try {
    const response = await axios.post('http://localhost:3000/users/register', userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('No se pudo registrar el usuario');
  }
};


//se lanzan los errores específicos: