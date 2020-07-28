import { obtenerDatosTiempo, transformaDatos } from '../servicios/Tiempo.Servicio';
//CON DATOS...
export const ADD_DATOS_CIUDAD = 'ADD_DATOS_CIUDAD';
export const MODIFICAR_DATOS_CIUDAD = 'MODIFICAR_DATOS_CIUDAD';
export const ESTABLECER_INFO_CIUDAD = 'ESTABLECER_INFO_CIUDAD';
//PETICIONES DE....
export const OBTENER_DATOS_CIUDAD = 'OBTENER_DATOS_CIUDAD';


export const addDatosCiudad = (tiempoCiudad)=>{
    return {
        type: ADD_DATOS_CIUDAD,
        tiempoCiudad
    };
}

export const modificarDatosCiudad = (id, tiempoCiudad)=>{
    return {
        type: MODIFICAR_DATOS_CIUDAD,
        id,
        tiempoCiudad
    };
}

export const establecerInfoCiudad = (tiempoCiudad)=>{
    return {
        type: ESTABLECER_INFO_CIUDAD,
        tiempoCiudad
    };
}

export const actualizarDatosCiudad = (id, nombreCiudad)=>{
    return {
        type: OBTENER_DATOS_CIUDAD,
        id,
        nombreCiudad
    };
}

export const peticionForecastParaAnadir = (ciudad) =>{
    return dispatch => {
        obtenerDatosTiempo(ciudad)
        .then(
            datos => {
                dispatch(addDatosCiudad(transformaDatos(datos)));
            }
        )
        .catch(error => console.log("Erro al llamar al servicio del tiempo."));
    };
}

export const peticionForecastParaActualizar = (ciudad,id) =>{
    return dispatch => {
        obtenerDatosTiempo(ciudad)
        .then(
            datos => {
                dispatch(modificarDatosCiudad(datos.id, transformaDatos(datos)));
            }
        )
        .catch(error => console.log("Erro al llamar al servicio del tiempo."));
    };
}

export const peticionForecastParaMasInfo = (ciudad) =>{
    return dispatch => {
        obtenerDatosTiempo(ciudad)
        .then(
            datos => {
                 dispatch(establecerInfoCiudad(transformaDatos(datos)));
            }
        )
        .catch(error => console.log("Erro al llamar al servicio del tiempo."));
    };
}