const input = document.querySelector('#input-search');
const city = document.querySelector('.weather__city')
const country = document.querySelector('.weather__country');
const day = document.querySelector('.weather__day');
const hour = document.querySelector('.weather__hour');
const temperature = document.querySelector('.value_temperature');
const vision = document.querySelector('.vision');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity')
const title = document.querySelector('.weather__title')
const body_weather = document.querySelector('.weather__body')
const wrapper = document.querySelector('.wrapper')
const bg_weather = document.querySelector('.weather')
function changeWeatherAPI() {
    let value = input.value.trim()
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=5fb34d5374022cf6c2b396ad4f44b9bd`;
    fetch(API)
    .then(function(res){
       return res.json()
    })
    .then(function(data){
        console.log(data)
        if(data.cod === 200) {
            body_weather.classList.remove('none')
            console.log(data)
            city.innerText = data.name;
            country.innerText = data.sys.country;
            temperature.innerText = Math.round(data.main.temp - 273.15) 
            vision.innerText = data.visibility + 'm'
            wind.innerText = data.wind.speed + 'm/s'
            humidity.innerText = data.main.humidity + '%'
            title.innerText = data.weather[0].main;
            day.innerText = new Date().toLocaleDateString('vi');
            hour.innerHTML = new Date().toLocaleTimeString('vi')
            if(Math.round(data.main.temp - 273.15)  < 22) {
                wrapper.classList.add('cold')
                bg_weather.classList.add('cold')
            }
            if (Math.round(data.main.temp - 273.15)  > 22){
                bg_weather.classList.remove('cold')
                wrapper.classList.remove('cold')
            }
        }
        else {
            body_weather.classList.add('none')
        }
    })
    
}

input.addEventListener('keypress', function(e) {
    if(e.code == 'Enter') {
        changeWeatherAPI()
    }
})