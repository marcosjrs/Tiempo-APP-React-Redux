import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Humedad from './Humedad/Humedad';
import Temperatura from './Temperatura/Temperatura';
import Viento from './Viento/Viento';
import Localidad from './Localidad/Localidad';

export class Tiempo extends Component {
    
    render() {
        return (
            <div>
                <Localidad localidad={this.props.tiempo.ciudad}></Localidad>
                <div>
                    <Temperatura temperatura={this.props.tiempo.temperatura}></Temperatura>
                    <Humedad humedad={this.props.tiempo.humedad}></Humedad>
                    <Viento viento={this.props.tiempo.viento}></Viento>
                </div>
            </div>
        )
    }
}
Tiempo.propTypes = {
    tiempo: PropTypes.shape({
        localidad: PropTypes.string,
        temperatura: PropTypes.string,
        humedad: PropTypes.string,
        viento: PropTypes.string
    }).isRequired
}

export default Tiempo
