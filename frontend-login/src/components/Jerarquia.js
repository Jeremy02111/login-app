import React, { useState, useEffect } from 'react';
import { getTrabajadores, getJerarquia } from '../services/trabajadorService';

function Jerarquia({ token }) {
  const [trabajadores, setTrabajadores] = useState([]);
  const [selectedTrabajador, setSelectedTrabajador] = useState('');
  const [jerarquia, setJerarquia] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Cargar la lista de trabajadores para el dropdown
  useEffect(() => {
    const fetchTrabajadores = async () => {
      try {
        const data = await getTrabajadores(token);
        setTrabajadores(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchTrabajadores();
  }, [token]);

  // Cargar la jerarquía cuando se selecciona un trabajador
  useEffect(() => {
    if (!selectedTrabajador) {
      setJerarquia([]);
      return;
    }

    const fetchJerarquia = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getJerarquia(token, selectedTrabajador);
        setJerarquia(data);
      } catch (err) {
        setError(err.message);
        setJerarquia([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJerarquia();
  }, [selectedTrabajador, token]);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Consulta de Jerarquía de Empleados</h3>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          
          <div className="mb-4">
            <label htmlFor="trabajador-select" className="form-label fw-bold">Seleccione un Trabajador:</label>
            <select
              id="trabajador-select"
              className="form-select form-select-lg"
              value={selectedTrabajador}
              onChange={(e) => setSelectedTrabajador(e.target.value)}
            >
              <option value="">-- Por favor, elija un trabajador --</option>
              {trabajadores.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.nombre} ({t.cargo})
                </option>
              ))}
            </select>
          </div>

          {loading && <div className="text-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Cargando...</span></div></div>}

          {jerarquia.length > 0 && !loading && (
            <div>
              <h4 className="mb-3">Cadena de Mando:</h4>
              <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Nivel</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Cargo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jerarquia.map((item) => (
                      <tr key={item.nivel}>
                        <td><span className="badge bg-secondary fs-6">{item.nivel}</span></td>
                        <td>{item.nombre}</td>
                        <td>{item.cargo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jerarquia;
