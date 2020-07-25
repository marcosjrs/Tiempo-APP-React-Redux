import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Humedad extends Component {
    render() {
        return (
            <span>
                Humedad: {this.props.humedad}
            </span>
        )
    }
}

Humedad.propTypes = {
    humedad: PropTypes.string.isRequired
}

export default Humedad
