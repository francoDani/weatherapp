async function getCity(city) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40090b952a93caa2974cbae21e806fb2`);
    let data = await response.json()
    return data;    
}
getCity("simoca").then(data => console.log(data));

let city = document.getElementsByClassName("cityInput").value;


function createCard (city){
    let sectionElement = document.createElement('section');
    let cityElement = document.createElement('h1');
    let tempElement = document.createElement('h3');
    let weatherElement = document.createElement('h4');
    
    sectionElement.className = "cardContainer";
    cityElement.className = "city";
    tempElement.className = "temp";
    weatherElement.className = "weather";
    
    
    getCity(city).then(data => cityElement.innerHTML = data.name);
    getCity(city).then(data => tempElement.innerHTML = Math.round(data.main.temp - 273.15)+" °c" );
    getCity(city).then(data => weatherElement.innerHTML = data.weather[0].description);
    
    document.body.appendChild(sectionElement);
    sectionElement.appendChild(cityElement);
    sectionElement.appendChild(tempElement);
    sectionElement.appendChild(weatherElement);
}

createCard("londres");
