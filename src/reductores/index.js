import { combineReducers } from "redux";
import { tiempoCiudad } from "./tiempoCiudad";

export default combineReducers({tiempoCiudad});
export const getEstadoTiempoCiudades = state => state.tiempoCiudad;

