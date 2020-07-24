import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Humedad from './Humedad/Humedad';
import Temperatura from './Temperatura/Temperatura';
import Viento from './Viento/Viento';
import Localidad from './Localidad/Localidad';

export class Tiempo extends Component {

    render() {
        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
                <div className="card-header">
                    <h5 className="card-title"><Localidad localidad={this.props.tiempo.ciudad}></Localidad></h5>
                </div>
                <div className="card-body">
                    <div className="card-text"><Temperatura temperatura={this.props.tiempo.temperatura}></Temperatura></div>
                    <div className="card-text"><Humedad humedad={this.props.tiempo.humedad}></Humedad></div>
                    <div className="card-text"><Viento viento={this.props.tiempo.viento}></Viento></div>
                </div>
                <div className="card-footer">
                    <a href="#" className="card-link">Actualizar</a>
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
