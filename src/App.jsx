import { useState } from 'react';
import Saludo from './components/Saludo';
import TarjetaPerfil from './components/TarjetaPerfil';
import Contador from './components/Contador';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Hacer la Activida 4' },
    { id: 2, texto: 'Pasar 1 hora intentando hacer el deploy' },
    { id: 3, texto: 'Comprar leche' },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea === '') return;
    const nueva = { id: tareas.length + 1, texto: nuevaTarea };
    setTareas([...tareas, nueva]);
    setNuevaTarea('');
  };

  return (
    <div className="contenedor">
      <Saludo />

      <TarjetaPerfil
        nombre="Roque Antonio Cruz Santiago | Lordynt"
        carrera="Ingeniería en Sistemas Computacionales"
        edad={21}
      />

      <Contador />

      <div className="agregar-tarea">
        <h2>Agregar tarea</h2>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      {tareas.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <ListaTareas tareas={tareas} />
      )}
    </div>
  );
}

export default App;