

export const obtenerDatosTiempo = (ciudad) => {
    const appId = "&appid=d8786b6812db51b97fdbbcf50f3b58f6";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}${appId}`;
    return fetch(url)
    .then( peticionRecuperacionDatos => peticionRecuperacionDatos.json());
}

export const transformaDatos = (datosTiempoSinTransformar) =>(
    {
        id: datosTiempoSinTransformar.id,
        temperatura: (parseFloat(datosTiempoSinTransformar.main.temp) - 273,15)+'ºC',
        humedad: datosTiempoSinTransformar.main.humidity+'%',
        viento: datosTiempoSinTransformar.wind.speed+'m/s',
        ciudad: datosTiempoSinTransformar.name
    }
)


