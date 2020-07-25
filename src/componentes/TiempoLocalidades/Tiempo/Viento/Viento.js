import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Viento extends Component {
    render() {
        return (
            <span>
                Viento: {this.props.viento}
            </span>
        )
    }
}

Viento.protoTypes = {
    viento: PropTypes.string
}

export default Viento
