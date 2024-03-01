import { useEffect, useState } from 'react';

function Docs() {
  useEffect(() => {
    console.log('Cargar docs...');
  }, []);
  const [cont, setCont] = useState(0);
  return (
    <div>
      <h1>Documentos</h1>
      <p>Contador: {cont}</p>
      <button onClick={() => setCont(cont + 1)}>Incrementar</button>
    </div>
  );
}

export default Docs;
