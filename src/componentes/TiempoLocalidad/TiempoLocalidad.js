import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Localidad from './Localidad/Localidad';
import Tiempo from './Tiempo/Tiempo';

/**
 * Componente que mostrará la tarjeta de información por cada localidad
 */
export class TiempoLocalidad extends Component {
    render() {
        return (
            <div>
                <Localidad></Localidad>
                <Tiempo></Tiempo>
            </div>
        )
    }
}

export default TiempoLocalidad
