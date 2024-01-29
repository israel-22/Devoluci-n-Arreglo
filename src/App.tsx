import React, { useState } from 'react';

const App: React.FC = () => {
  const [arregloOriginal, setArregloOriginal] = useState<number[]>([]);
  const [arregloDivididoPor5, setArregloDivididoPor5] = useState<number[]>([]);

  const generarArregloOriginal = () => {
    const nuevoArreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    setArregloOriginal(nuevoArreglo);
    const arregloDividido = nuevoArreglo.map(numero => numero / 5);//vera inge que si puse el map asi quietito si funciono
    setArregloDivididoPor5(arregloDividido);
  };

  return (
    <div>
      <button onClick={generarArregloOriginal}>Generar Arreglo</button>
      <h2>Arreglo Original: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]</h2>
      <ul>
        {arregloOriginal.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
      <h2>Arreglo Dividido por 5:</h2>
      <ul>
        {arregloDivididoPor5.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
