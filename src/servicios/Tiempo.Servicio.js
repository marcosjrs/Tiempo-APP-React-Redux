

export const obtenerDatosTiempo = (ciudad) => {
    const appId = "&appid=d8786b6812db51b97fdbbcf50f3b58f6";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}${appId}`;
    return fetch(url)
    .then( peticionRecuperacionDatos => peticionRecuperacionDatos.json());
}
export const obtenerDatosTiempoPorId = (id) => {
    const appId = "&appid=d8786b6812db51b97fdbbcf50f3b58f6";
    const url = `api.openweathermap.org/data/2.5/weather?id=${id}${appId}`;
    return fetch(url)
    .then( peticionRecuperacionDatos => peticionRecuperacionDatos.json());
}

export const transformaDatos = (datosTiempoSinTransformar) =>(
    {
        id: datosTiempoSinTransformar.id,
        temperatura: Math.round((parseFloat(datosTiempoSinTransformar.main.temp).toFixed(2) - 273.15) )+'ºC',
        humedad: datosTiempoSinTransformar.main.humidity+'%',
        viento: datosTiempoSinTransformar.wind.speed+'m/s',
        ciudad: datosTiempoSinTransformar.name,
        longitud: datosTiempoSinTransformar.coord.lon,
        latitud: datosTiempoSinTransformar.coord.lat,
        temp_maxima: Math.round((parseFloat(datosTiempoSinTransformar.main.temp_max).toFixed(2) - 273.15) )+'ºC',
        temp_minima: Math.round((parseFloat(datosTiempoSinTransformar.main.temp_min).toFixed(2) - 273.15) )+'ºC',
        presion: datosTiempoSinTransformar.main.pressure,
        visibilidad: datosTiempoSinTransformar.visibility,
        tipo_tiempo:datosTiempoSinTransformar.weather.main
    }
)


