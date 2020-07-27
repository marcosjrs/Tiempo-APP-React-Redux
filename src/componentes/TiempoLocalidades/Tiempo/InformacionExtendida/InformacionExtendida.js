import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class InformacionExtendida extends Component {

    render() {
        const {longitud, latitud, temp_maxima, temp_minima, presion, humedad, visibilidad, viento} = this.props.informacion;
        return (
            <div>
                <h4>{this.props.informacion.ciudad}</h4>
                <div className="caracteristica">Longitud/Latitud:</div><div>{longitud} / {latitud}</div>
                <div className="caracteristica">Temperatura Máxima/Mínima:</div><div>{temp_maxima} / {temp_minima}</div>
                <div className="caracteristica">Presión Atmosférica.:</div><div>{presion}</div>
                <div className="caracteristica">Humedad:</div><div>{humedad}</div>
                <div className="caracteristica">Visibilidad:</div><div>{visibilidad}</div>
                <div className="caracteristica">Viento:</div><div>{viento} </div>
            </div>
        )
    }
}

InformacionExtendida.protoTypes = {
    id: PropTypes.number.isRequired,
    temperatura: PropTypes.string.isRequired,
    humedad: PropTypes.string.isRequired,
    viento: PropTypes.string.isRequired,
    ciudad: PropTypes.string.isRequired,
    longitud: PropTypes.number.isRequired,
    latitud: PropTypes.number.isRequired,
    temp_maxima: PropTypes.number.isRequired,
    temp_minima: PropTypes.number.isRequired,
    presion: PropTypes.number.isRequired,
    visibilidad: PropTypes.number.isRequired,
    tipo_tiempo: PropTypes.string.isRequired,
};

export default InformacionExtendida
