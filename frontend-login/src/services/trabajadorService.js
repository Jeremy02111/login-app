import axios from 'axios';

const API_URL = 'http://localhost:3000/trabajadores';

const getAuthHeaders = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getTrabajadores = async (token) => {
  try {
    const response = await axios.get(API_URL, getAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Error al obtener trabajadores', error);
    throw new Error('No se pudo obtener la lista de trabajadores');
  }
};

export const getJerarquia = async (token, id) => {
  try {
    const response = await axios.get(`${API_URL}/jerarquia/${id}`, getAuthHeaders(token));
    return response.data;
  } catch (error) {
    console.error('Error al obtener la jerarquía', error);
    throw new Error('No se pudo obtener la jerarquía del trabajador');
  }
};
