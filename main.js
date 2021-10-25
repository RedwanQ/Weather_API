const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.mainbtn');
const ShowData = document.querySelector('.ShowData');
// require('dotenv').config();

// Api Key

// const API_KEY = process.env.MY_API_KEY;
const API_KEY = "0f957aabcd525cf16c95bb84b6ba5f3d"

button.addEventListener('click', () => {

    const cityInput = inputTxt.value;
    // console.log(cityInput)

    // Fetch
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=imperial`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            

            inputTxt.value = " ";

            //Now Show All Data Value
            ShowData.innerHTML = `
                                <div class="text-center pt-5 pb-5">
                                <ul style="list-style: none;" >
                                    <h2> ${data.name} </h2> 
                                    <img src="https://image.flaticon.com/icons/png/512/35/35906.png"  style="width: 200px;" alt="">
                                    <li class="temp">Temp: ${data.main.temp}°F</li>
                                    <li class="temp">Forecast: ${data.weather[0].main}</li>
                                    <li class="temp">Weather Icon: ${data.weather[0].icon}</li>
                                    <li class="tempm">Temp Max: ${data.main.temp_max}°F</li>
                                    <li class="tempm">Temp Min: ${data.main.temp_min}°F</li>
                                    <li class="humidity">Humidity: ${data.main.humidity}%</li>
                                </ul>
                                </div>
                                `; 

        });
});

