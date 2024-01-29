// ArregloDivididoPor5.tsx
import React, { useState } from 'react';

const ArregloDivididoPor5: React.FC = () => {
  const [arregloDividido, setArregloDividido] = useState<number[]>([]);

  // Función para dividir cada elemento por 5
  const dividirPor5 = (numeros: number[]): number[] => {
    return numeros.map(numero => numero / 5);
  };

  // Función para generar el arreglo dividido por 5
  const generarArregloDividido = () => {
    const arregloOriginal = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const nuevoArregloDividido = dividirPor5(arregloOriginal);
    setArregloDividido(nuevoArregloDividido);
  };

  return (
    <div>
      <h2>Arreglo Dividido por 5:</h2>
      <button onClick={generarArregloDividido}>Generar Arreglo</button>
      <ul>
        {arregloDividido.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArregloDivididoPor5;


