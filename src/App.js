import React from 'react';
import './App.css';
import { TiempoLocalidad } from './componentes/TiempoLocalidad/TiempoLocalidad';

function App() {

  const tiemposFake = [
    {
      id:1,
      ciudad: 'Santiago de Compostela',
      viento: '25m/s',
      temperatura: '30º',
      humedad: '15%'
    },
    {
      id:2,
      ciudad: 'A Coruña',
      viento: '25m/s',
      temperatura: '27º',
      humedad: '23%'
    }
  ];

  const getListTiempoCiudades = (tiempoCiudades) => tiempoCiudades.map(
    (tiempo, indice) => <TiempoLocalidad key={tiempo.id} tiempo={tiempo}></TiempoLocalidad>
  );

  return (
    <div className="App">
      {getListTiempoCiudades(tiemposFake)}
    </div>
  );
}

export default App;