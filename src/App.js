import React from 'react';
import './App.css';
import {TiempoLocalidad}  from './componentes/TiempoLocalidad/TiempoLocalidad';

function App() {

  const tiempoFake = {
      ciudad:'Santiago de Compostela',
      viento:'25m/s',
      temperatura:'30º',
      humedad:'5%'
  }

  return (
    <div className="App">
      Aplicación del tiempo
      <TiempoLocalidad tiempo={tiempoFake}></TiempoLocalidad>
    </div>
  );
}

export default App;