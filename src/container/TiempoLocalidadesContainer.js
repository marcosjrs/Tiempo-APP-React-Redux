import React, { Component } from 'react';
import Tiempo from '../componentes/TiempoLocalidades/Tiempo/Tiempo';
import InformacionExtendida from '../componentes/TiempoLocalidades/Tiempo/InformacionExtendida/InformacionExtendida';
import { obtenerDatosTiempo, transformaDatos } from '../servicios/Tiempo.Servicio';

import { connect } from 'react-redux';
import { addDatosCiudad, modificarDatosCiudad, actualizarDatosCiudad, establecerInfoCiudad } from '../acciones';

/**
 * Componente que mostrará las tarjetas de informaciones por cada localidad
 */
export class TiempoLocalidadesContainer extends Component {

    tiempoCiudades = {
        datos: [],
        seleccionada: null
    };

    constructor() {
        super();
        this.actualizarDatosCiudad = this.actualizarDatosCiudad.bind(this);
    }

    actualizarDatosCiudad = (id, ciudad) => {
        obtenerDatosTiempo(ciudad)
            .then(datos => this.actualizarEstadoCiudad(id, transformaDatos(datos)))
            .catch(error => console.log("Erro al llamar al servicio del tiempo."));
        console.log("Actualizar: ", id)
    }

    masInfoCiudad = (id, ciudad) => {
        //Lo siguiente no debería estar aquí... 
        obtenerDatosTiempo(ciudad)
            .then(datos => {
                this.actualizarEstadoCiudad(id, transformaDatos(datos));
                this.actualizarMasInfo(transformaDatos(datos));
            })
            .catch(error => console.log("Erro al llamar al servicio del tiempo."));
    }

    getListTiempoCiudades = (tiempoCiudades) => tiempoCiudades.map(
        (tiempo) => <Tiempo key={tiempo.id} tiempo={tiempo}  actualizarDatosCiudad={this.actualizarDatosCiudad} masInfoCiudad={this.masInfoCiudad}></Tiempo>
    );

    addEstadoCiudades = (tiempociudad) => {
        this.props.addDatosCiudad(tiempociudad);
    }

    actualizarEstadoCiudad = (id, tiempociudad) => {
        this.props.modificarDatosCiudad(id, tiempociudad);
    }

    actualizarMasInfo = (tiempociudad) => {
        this.props.establecerInfoCiudad(tiempociudad);
    }

    componentDidMount() {
        console.log(this.props)
        obtenerDatosTiempo("A Coruña,es").then(datos => this.addEstadoCiudades(transformaDatos(datos)));
        obtenerDatosTiempo("Madrid").then(datos => this.addEstadoCiudades(transformaDatos(datos)));
        obtenerDatosTiempo("Paris").then(datos => this.addEstadoCiudades(transformaDatos(datos)));
        obtenerDatosTiempo("Lisbon").then(datos => this.addEstadoCiudades(transformaDatos(datos)));
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
                            {this.props && this.props.datos && this.getListTiempoCiudades(this.props.datos)}
                        </div>
                        <div className="col-lg-3 col-sm-4 container-informacion-extendida my-auto">
                            {(this.props && this.props.seleccionada) ? <InformacionExtendida key={"informacionExtendida"} informacion={this.props.seleccionada}></InformacionExtendida> : <div><h4>Más Info</h4>Ninguna ciudad seleccionada</div>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { datos, seleccionada } = state
    return { datos, seleccionada }
  }
const mapDispatchToProps = dispatch => {
    return {
        addDatosCiudad: (ciudad) => dispatch(addDatosCiudad(ciudad)),
        modificarDatosCiudad: (id, ciudad) => dispatch(modificarDatosCiudad(id, ciudad)),

        actualizarDatosCiudad: (id, ciudad) => dispatch(actualizarDatosCiudad(id, ciudad)),
        establecerInfoCiudad: (id, ciudad) => dispatch(establecerInfoCiudad(id, ciudad)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TiempoLocalidadesContainer);
