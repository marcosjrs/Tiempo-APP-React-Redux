import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Humedad extends Component {
    render() {
        return (
            <div>
                {this.props.humedad}
            </div>
        )
    }
}

Humedad.propTypes = {
    humedad: PropTypes.string.isRequired
}

export default Humedad
