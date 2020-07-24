import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tiempo from './Tiempo/Tiempo';

/**
 * Componente que mostrará la tarjeta de información por cada localidad
 */
export class TiempoLocalidad extends Component {
    render() {
        return (
            <Tiempo tiempo={this.props.tiempo}></Tiempo>
        )
    }
}

TiempoLocalidad.propTypes = {
    tiempo: PropTypes.object.isRequired
}
export default TiempoLocalidad
