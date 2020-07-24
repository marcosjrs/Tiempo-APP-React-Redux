import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Temperatura extends Component {
    render() {
        return (
            <div>
                {this.props.temperatura}
            </div>
        )
    }
}

Temperatura.propTypes = {
    temperatura: PropTypes.string.isRequired
}

export default Temperatura
