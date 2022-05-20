class WeatherApiService {
    apiBase = 'https://weatherapi-com.p.rapidapi.com';

    getWeather = async (url) => {
        const res = await fetch(`${this.apiBase}${url}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
                'X-RapidAPI-Key': '0239605473msh8140c47a9423468p12b66bjsn872dd3793d30'
            }
        })

        if(res.ok === false){
            return  console.log(`Ошибка`)
        }

        return res.json()
    }


    getLocationWeather = async (location) => {
        const weather = this.getWeather(`/current.json?q=${location}&lang=ru`);

        return weather
    }

    getLocationForecast = async (location) => {
        const forecast = this.getWeather(`/forecast.json?q=${location}&days=3&lang=ru`);

        return forecast
    }

    // getDateForecast = async (location, date) => {
    //     const dateForecast = this.getWeather(`/forecast.json?q=${location}&lang=ru&dt=${date}`);
    //
    //     return dateForecast
    // }
}

export default WeatherApiService