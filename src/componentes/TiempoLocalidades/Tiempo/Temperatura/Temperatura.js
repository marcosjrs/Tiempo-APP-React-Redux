import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Temperatura extends Component {
    render() {
        return (
            <span>
                Temperatura: {this.props.temperatura}
            </span>
        )
    }
}

Temperatura.propTypes = {
    temperatura: PropTypes.string.isRequired
}

export default Temperatura
