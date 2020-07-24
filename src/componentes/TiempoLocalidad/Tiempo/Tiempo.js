import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Humedad from './Humedad/Humedad';
import Temperatura from './Temperatura/Temperatura';
import Viento from './Viento/Viento';

export class Tiempo extends Component {
    render() {
        return (
            <div>
                <Temperatura></Temperatura>
                <Humedad></Humedad>
                <Viento></Viento>
            </div>
        )
    }
}

export default Tiempo
