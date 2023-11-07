const inputBox = document.getElementById("inputBox");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weatherImg");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const locationNotFound = document.querySelector(".locationNotFound");
const weatherBody = document.querySelector(".body");

const checkWeather = async (city) => {
  const apiKey = "da78e044b104ce0b0864bcffbdab37bc";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const weatherData = await fetch(url).then((response) => response.json());
  console.log(weatherData);

  if (weatherData.cod === "404") {
    locationNotFound.style.display = "flex";
    weatherBody.style.display = "none";
    return;
  }

  weatherBody.style.display = "flex";
  locationNotFound.style.display = "none";

  temp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
  description.innerHTML = weatherData.weather[0].description;
  humidity.innerHTML = `${weatherData.main.humidity}%`;
  windSpeed.innerHTML = `${weatherData.wind.speed}km/hr`;

  switch (weatherData.weather[0].main) {
    case "Clear":
      weatherImg.src = "./resources/clear.png";
      break;
    case "Clouds":
      weatherImg.src = "./resources/clouds.png";
      break;
    case "Rain":
      weatherImg.src = "./resources/rain.png";
      break;
    case "Mist":
      weatherImg.src = "./resources/mist.png";
      break;
    case "Snow":
      weatherImg.src = "./resources/snow.png";
      break;
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

inputBox.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    checkWeather(inputBox.value);
  }
});
