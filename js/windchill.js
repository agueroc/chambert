const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3838583&appid=de34183783599331759a72cd0a9ba44f&units=metric'

fetch(apiURL)
.then((response)=> response.json())
.then ((weatherInfo) => {
    console.log(weatherInfo);
    let temperature=weatherInfo.main.temp;
    temperature=temperature.toFixed(1)
    let windSpeed=weatherInfo.wind.speed;
    windSpeed=windSpeed.toFixed(1)

    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=temperature+'º C';
    document.getElementById('windSpeed').innerHTML='Wind Speed: '+windSpeed;
    
    const iconsrc='https://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png';
    const desc = weatherInfo.weather[0].description;

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('#weather-desc').textContent=desc+'.';

    const temp=weatherInfo.main.temp;
    const wind=weatherInfo.wind.speed;
    

}