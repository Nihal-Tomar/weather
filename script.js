document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherbtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMsgDisplay = document.getElementById("error-message");

  const API_KEY = "f25917ac7c1ea68486fd97b36fdbdb8f";

  getWeatherbtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showerror();
    }
  });

  async function fetchWeatherData(city) {
    // fetching the weather data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    

    return data;
  }

  function displayWeatherData(data) {
    // display the weather Data
    console.log(data);

    const { name, main, weather } = data;
    cityName.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;

    weatherInfo.classList.remove(hidden);
    errorMsgDisplay.classList.add(hidden);
  }

  function showerror(error) {
    weatherInfo.classList.remove("hidden");
    errorMsgDisplay.classList.add("hidden");
  }
});
