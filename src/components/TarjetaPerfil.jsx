function TarjetaPerfil(props) {
  return (
    <div className="tarjeta">
      <h2>{props.nombre}</h2>
      <p>Carrera: {props.carrera}</p>
      <p>Edad: {props.edad}</p>
    </div>
  );
}

export default TarjetaPerfil;