import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Humedad from './Humedad/Humedad';
import Temperatura from './Temperatura/Temperatura';
import Viento from './Viento/Viento';
import Localidad from './Localidad/Localidad';

export class Tiempo extends Component {

    actualizar = (e) => {
        e.preventDefault()
        this.props.actualizarDatosCiudad(this.props.tiempo.id, this.props.tiempo.ciudad);
    }

    render() {
        const { ciudad, temperatura, humedad, viento } = this.props.tiempo;
        return (
            <div className="card" style={{ width: 18 + 'rem' }}>
                <div className="card-header">
                    <h5 className="card-title"><i className='fas fa-city'></i><Localidad localidad={ciudad}></Localidad></h5>
                </div>
                <div className="card-body">
                    <div className="card-text"><i className='fas fa-sun'></i> <Temperatura temperatura={temperatura}></Temperatura></div>
                    <div className="card-text"> <i className='fas fa-tint'></i> <Humedad humedad={humedad}></Humedad></div>
                    <div className="card-text"><i className='fas fa-wind'></i> <Viento viento={viento}></Viento></div>
                </div>
                <div className="card-footer">
                    <a href="false" className="card-link" onClick={this.actualizar} ><i className="fas fa-sync"></i> Actualizar</a>
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
