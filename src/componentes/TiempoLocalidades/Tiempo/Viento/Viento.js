import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Viento extends Component {
    render() {
        return (
            <div>
                Viento: {this.props.viento}
            </div>
        )
    }
}

export default Viento
