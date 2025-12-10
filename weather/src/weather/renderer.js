document.addEventListener("keydown" , function(event) {
    if(event.key === "Enter"){
        getWeather();
    }
});


async function getWeather() {
    const city=document.getElementById('city').value;  
    const result = document.getElementById('result');
    const weather = document.getElementById('weatherResult');
    
    try {
        const response = await window.api.fetchWeather(city);
        
        const country  = document.getElementById('countryName');
        const temp = document.getElementById('temperature');
        const feel = document.getElementById('feelsLike');
        const humidity = document.getElementById('humidity');
        const pressure = document.getElementById('pressure');
        const wind = document.getElementById('windSpeed');
        
        country.innerText = `City name:${response.sys.country}`;
        temp.innerText = `Temperature: ${Math.round(response.main.temp)} °C`;
        feel.innerText = `Feels like: ${Math.round(response.main.feels_like)} °C`;
        humidity.innerText = `Humidity: ${response.main.humidity} %`;
        pressure.innerText = `Pressure: ${response.main.pressure} hPa`;
        wind.innerText = `Wind speed: ${response.wind.speed} m/s`;
        result.style.visibility = 'hidden';
        weather.style.visibility = 'visible';
        } catch (error) {         
         result.style.visibility = 'visible';
         weather.style.visibility = 'hidden';
        return;
    }


}

function goToJob() {
    window.location.href = "../job/index.html";
}
