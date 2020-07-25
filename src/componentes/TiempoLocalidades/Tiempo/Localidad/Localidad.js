import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Localidad extends Component {
    render() {
        return (
            <div>
                {this.props.localidad}
            </div>
        )
    }
}

Localidad.propTypes = {
    localidad: PropTypes.string.isRequired
}

export default Localidad
