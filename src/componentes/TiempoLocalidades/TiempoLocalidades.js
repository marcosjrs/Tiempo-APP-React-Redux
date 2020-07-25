import React, { Component } from 'react'
import Tiempo from './Tiempo/Tiempo';
import {obtenerDatosTiempo, transformaDatos} from '../../servicios/Tiempo.Servicio';

/**
 * Componente que mostrará las tarjetas de informaciones por cada localidad
 */
export class TiempoLocalidades extends Component {

    tiempoCiudades = {
        datos:[]
    };

    constructor(){
        super();
        this.actualizarDatosCiudad = this.actualizarDatosCiudad.bind(this);
    }

    actualizarDatosCiudad = (id, ciudad) => {
        obtenerDatosTiempo(ciudad)
            .then( datos => this.actualizarEstadoCiudad( id, transformaDatos(datos) ) )
            .catch( error => console.log("Erro al llamar al servicio del tiempo."));
        console.log("Actualizar: ",id)
    }

    getListTiempoCiudades = (tiempoCiudades) => tiempoCiudades.map(
        (tiempo, indice) => <Tiempo key={tiempo.id} tiempo={tiempo} actualizarDatosCiudad={this.actualizarDatosCiudad}></Tiempo>
    );

    addEstadoCiudades = (tiempociudad) => {        
        this.tiempoCiudades.datos = [...this.tiempoCiudades.datos, tiempociudad];
        this.setState(this.tiempoCiudades);
    }   

    actualizarEstadoCiudad = (id, tiempociudad) => {        
        this.tiempoCiudades.datos = this.tiempoCiudades.datos.map(
            (tiempo) =>{
                if(tiempo.id === id){
                    tiempo = {...tiempo,...tiempociudad};
                }
                return tiempo;
            }
        );
        this.setState(this.tiempoCiudades);
    }       

    componentDidMount (){
        obtenerDatosTiempo("Paris").then( datos => this.addEstadoCiudades(transformaDatos(datos)) );
        obtenerDatosTiempo("Madrid").then( datos => this.addEstadoCiudades(transformaDatos(datos)) );
        obtenerDatosTiempo("Lisbon").then( datos => this.addEstadoCiudades(transformaDatos(datos)) );
    }

    render() {
        return (
            <div>
                {this.state && this.state.datos && this.getListTiempoCiudades(this.state.datos)}
            </div>
        )
    }
}

export default TiempoLocalidades
