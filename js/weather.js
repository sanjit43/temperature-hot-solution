const API_Key = 'daca89be7c2c50688710e59442354de1'

const searchTemperature = () => {
    const city = document.getElementById('search-city');
    const cityName = city.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => getTemperature(data))

    city.value = '';
}



const getTemperature = temperature => {
    // console.log(temperature);
    document.getElementById('city').innerText = temperature.name;
    document.getElementById('temp').innerText = temperature.main.temp;
    document.getElementById('main').innerText = temperature.weather[0].main;

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);

}