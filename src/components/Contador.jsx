import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="contador">
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Sumar 1</button>
      <button onClick={() => setContador(contador - 1)}>Restar 1</button>
    </div>
  );
}

export default Contador;