import './WeatherApp.css'
import WeatherApiService from "../services/weatherapi_service";
import {useEffect, useState} from "react";

function WeatherApp() {
    const [ weather, setWeather ] = useState([]);
    const [ localName, setLocalName ] = useState('');
    const [ localForecast, setLocalForecast ] = useState([]);
    // const [ date, setDate ] = useState('');


    // console.log(weather);
    // console.log(localForecast);


    const weatherApi = new WeatherApiService();

    function showWeather() {
        const getLocalWeather = () => {
            weatherApi.getLocationWeather(localName).then((data) => setWeather(data))
        }

        getLocalWeather();

        const getLocalForecast = () => {
            weatherApi.getLocationForecast(localName).then((data) => setLocalForecast(data))
        }

        getLocalForecast();

    }

    // const getDateForecast = () => {
    //     weatherApi.getDateForecast(localName, date).then((data) => setWeather(data))
    // }

    return (
        <div className='weather-app'>
            {/*<input type="date" onChange={event => setDate(event.target.value)}/>*/}
            {/*<button onClick={getDateForecast}>Date</button>*/}
            <input type="text" onChange={event => setLocalName(event.target.value)}/>
            <button onClick={showWeather}>Search</button>
            <div>
                <div className='weather-card'>
                    <img src={weather?.current?.condition.icon} alt=""/>
                    {/*<img src={weather?.current?.forecast?.forecastday.day.condition.icon} alt=""/>*/}
                    <div>
                        <h1>{weather?.location?.name}</h1>
                        <p>Температура: {weather?.current?.temp_c} °C</p>
                        <p>Влажность: {weather?.current?.humidity}%</p>
                    </div>
                </div>
                <div>
                    <div className='forecast-block'>
                        <div className='forecast-card'>
                            <img src={localForecast?.forecast?.forecastday[0].day.condition.icon} alt=""/>
                            <p>{localForecast?.forecast?.forecastday[0].day.avgtemp_c} °C</p>
                            <p>{localForecast?.forecast?.forecastday[0].day.avghumidity} %</p>
                        </div>
                        <div className='forecast-card'>
                            <img src={localForecast?.forecast?.forecastday[1].day.condition.icon} alt=""/>
                            <p>{localForecast?.forecast?.forecastday[1].day.avgtemp_c} °C</p>
                            <p>{localForecast?.forecast?.forecastday[1].day.avghumidity} %</p>
                        </div>
                        <div className='forecast-card'>
                            <img src={localForecast?.forecast?.forecastday[2].day.condition.icon} alt=""/>
                            <p>{localForecast?.forecast?.forecastday[2].day.avgtemp_c} °C</p>
                            <p>{localForecast?.forecast?.forecastday[2].day.avghumidity} %</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp