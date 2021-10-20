// import the convertTemp.js and getDaylight.js scripts with their default export

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
// import getFahren  from './convertTemp';
import getFahren from './convertTemp.js'
import getDaylight from './getDayight.js'

function getWeather(city){
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},us&APPID=21dfe76e9a98030135fba59dcc7f3803`)
        .then(cities => {
            console.log(cities)
            displayTemp(cities)
        })
}

getWeather()

function fetchCity() {
    let city = document.getElementById('city').value
    // console.log(city)
    getWeather(city)
}

function displayTemp(city) {
    let citiesTemp = city.data.main.temp
    let cityLocation = city.data.sys.country
    document.getElementById('tempData').innerHTML = getFahren(citiesTemp, cityLocation)
    document.getElementById('weatherWrapper').style.backgroundColor = getDaylight(city.data.sys.sunrise, city.data.sys.sunset, city.data.dt)
    document.getElementById('humidData').innerHTML = city.data.main.humidity
    document.getElementById('conditionsData').innerHTML = city.data.weather[0].description
}

document.getElementById('goBttn').addEventListener('click', function(e){
    e.preventDefault()
    fetchCity()    
})
