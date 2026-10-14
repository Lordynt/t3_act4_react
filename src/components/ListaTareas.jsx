function ListaTareas(props) {
  return (
    <div className="lista-tareas">
      <h2>Lista de tareas</h2>
      <ul>
        {props.tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;