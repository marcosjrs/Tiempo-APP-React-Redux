import { createStore } from 'redux';
import { ADD_DATOS_CIUDAD, MODIFICAR_DATOS_CIUDAD, OBTENER_DATOS_CIUDAD, ESTABLECER_INFO_CIUDAD } from '../acciones';
const estadoInicial = {
    datos: [],
    seleccionada: null
};

const reducer = (estado = estadoInicial, accion) => {
    switch (accion.type) {
        case ADD_DATOS_CIUDAD:
            let nuevo = { ...estado };
            nuevo.datos = [...estado.datos, accion.tiempoCiudad];
            estado = nuevo;
            break;
        case MODIFICAR_DATOS_CIUDAD:
            let modificado = { ...estado };
            console.log(accion)
            modificado.datos = modificado.datos.map(
                (dato) => {
                    if (dato.id === accion.tiempoCiudad.id) {
                        dato = { ...accion.tiempoCiudad };
                    }
                    return dato;
                }
            );
            estado = modificado;
            break;
        case ESTABLECER_INFO_CIUDAD:
            let conInfoModificada = { ...estado };
            conInfoModificada.seleccionada = { ...accion.tiempoCiudad };
            estado = conInfoModificada;
            break;
        case OBTENER_DATOS_CIUDAD:
            console.log(estado, accion); //pedir a servicio web...
            break;
        default:
            console.log(estado, accion);
            break;
    }
    return estado;
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);