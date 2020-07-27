import React, { Component } from 'react'
import Tiempo from './Tiempo/Tiempo';
import InformacionExtendida from './Tiempo/InformacionExtendida/InformacionExtendida';
import {obtenerDatosTiempo, transformaDatos} from '../../servicios/Tiempo.Servicio';

/**
 * Componente que mostrará las tarjetas de informaciones por cada localidad
 */
export class TiempoLocalidades extends Component {

    tiempoCiudades = {
        datos:[],
        seleccionada:null
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

    masInfoCiudad = (id, ciudad) => {
        obtenerDatosTiempo(ciudad)
            .then( datos =>{ 
                this.actualizarEstadoCiudad( id, transformaDatos(datos) ); 
                this.actualizarMasInfo(transformaDatos(datos)); 
            })
            .catch( error => console.log("Erro al llamar al servicio del tiempo."));
        this.setState(this.tiempoCiudades);
    }

    getListTiempoCiudades = (tiempoCiudades) => tiempoCiudades.map(
        (tiempo, indice) => <Tiempo key={tiempo.id} tiempo={tiempo} actualizarDatosCiudad={this.actualizarDatosCiudad} masInfoCiudad={this.masInfoCiudad}></Tiempo>
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

    actualizarMasInfo = (tiempociudad) => { 
        this.tiempoCiudades.seleccionada = tiempociudad;
        this.setState(this.tiempoCiudades);
    }       

    componentDidMount (){
        obtenerDatosTiempo("A Coruña,es").then( datos => this.addEstadoCiudades(transformaDatos(datos)) );
        obtenerDatosTiempo("Madrid").then( datos => this.addEstadoCiudades(transformaDatos(datos)) );
        obtenerDatosTiempo("Paris").then( datos => this.addEstadoCiudades(transformaDatos(datos)) );
        obtenerDatosTiempo("Lisbon").then( datos => this.addEstadoCiudades(transformaDatos(datos)) );
    }

    render() {
        return (
            <div className="container-tiempo-app">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Datos Metereológicos</h3>
                        </div>
                    </div>
                    <div className="row container-datos-principal">
                        <div className="col-lg-9  col-md-7 col-sm-8 container-tiempo-ciudades">
                            {this.state && this.state.datos && this.getListTiempoCiudades(this.state.datos)}
                        </div>
                        <div className="col-lg-3 col-sm-4 container-informacion-extendida my-auto">
                        { (this.state && this.state.seleccionada) ?<InformacionExtendida informacion={this.state.seleccionada}></InformacionExtendida> :<div><h4>Más Info</h4>Ninguna ciudad seleccionada</div>  }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TiempoLocalidades
