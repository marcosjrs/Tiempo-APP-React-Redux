import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tiempo from './Tiempo/Tiempo';

/**
 * Componente que mostrará las tarjetas de informaciones por cada localidad
 */
export class TiempoLocalidades extends Component {
    constructor(){
        super();
    }

    getListTiempoCiudades = (tiempoCiudades) => tiempoCiudades.map(
        (tiempo, indice) => <Tiempo key={tiempo.id} tiempo={tiempo}></Tiempo>
    );
    
    

    componentWillMount (){
        const tiemposFake = {
            datos:[{
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
            }]
        };

        this.setState(tiemposFake);
    }

    render() {
        return (
            <div>
                {this.getListTiempoCiudades(this.state.datos)}
            </div>
        )
    }
}

export default TiempoLocalidades
