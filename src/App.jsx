import { useState } from 'react';
import './App.css';

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [formData, setFormData] = useState({
    documento: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const nuevosEstudiantes = estudiantes.map((estudiante, index) =>
        index === editIndex ? { ...formData } : estudiante
      );
      setEstudiantes(nuevosEstudiantes);
      setEditIndex(null);
    } else {
      setEstudiantes([...estudiantes, { ...formData }]);
    }
    setFormData({
      documento: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: ''
    });
  };

  const handleReset = () => {
    setFormData({
      documento: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: ''
    });
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const nuevosEstudiantes = estudiantes.filter((_, i) => i !== index);
    setEstudiantes(nuevosEstudiantes);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData({ ...estudiantes[index] });
  };

  return (
    <>
      <h1>Formulario de Estudiantes</h1>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Documento:
              <input type="text" name="documento" value={formData.documento} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Nombre:
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Apellido:
              <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Teléfono:
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <label>
              Correo:
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} required />
            </label>
          </div>
          <div>
            <button type="submit">Enviar</button>
            <button type="button" onClick={handleReset}>Restablecer</button>
          </div>
        </form>
        <h2>Lista de Estudiantes</h2>
        <ul>
          {estudiantes.map((estudiante, index) => (
            <li key={index}>
              {estudiante.documento} - {estudiante.nombre} {estudiante.apellido} - {estudiante.telefono} - {estudiante.correo}
              <button onClick={() => handleEdit(index)}>Editar</button>
              <button onClick={() => handleDelete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
