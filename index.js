import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import Mercury from "./assets/img/mercury.png";
import Venus from "./assets/img/venus.png";
import Earth from "./assets/img/earth.png";
import Mars from "./assets/img/mars.png";
import Jupiter from "./assets/img/jupiter.png";
import Saturn from "./assets/img/saturn.png";
import Uranus from "./assets/img/uranus.png";
import Neptune from "./assets/img/neptune.png";

const planetImages = {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune
};
const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links, state)}
    ${Main(state)}
    ${Footer()}
  `;

  const menuToggle = document.querySelector(".menu_toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  router.updatePageLinks();
}

function toggleMenu() {
  const menu = document.getElementById("navbarNav");
  if (menu) {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
}
// Call the function when the document is loaded
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu_toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }
});

//Weather API
router.hooks({
  before: (done, params) => {
    // We need to know what view we are on to know what data to fetch
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "Home":
        axios
          // Get request to retrieve the current weather data using the API key and providing a city name
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=iowa%20city`
          )
          .then(response => {
            // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            // Create an object to be stored in the Home state from the response
            store.Home.weather = {
              city: response.data.name,
              temp: kelvinToFahrenheit(response.data.main.temp),
              feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
              description: response.data.weather[0].main
            };
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});
router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();

// Submit Form
window.onload = function() {
  document
    .getElementById("sub-menu")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      // Get the selected planet and mission name from the form
      const selectedPlanet = document.getElementById("planet").value;
      const missionName = document.getElementById("mission").value;

      // Get the results container
      const resultsContainer = document.getElementById("result");

      // Create a new div for the result
      const resultDiv = document.createElement("div");

      // Create a new image element for the selected planet
      const planetImage = document.createElement("img");
      planetImage.src = planetImages[selectedPlanet];
      planetImage.alt = selectedPlanet;

      // Create a new paragraph element for the mission name
      const missionParagraph = document.createElement("p");
      missionParagraph.textContent = `Mission Name: ${missionName}`;

      // Append the image and paragraph to the result div
      resultDiv.appendChild(planetImage);
      resultDiv.appendChild(missionParagraph);

      // Append the result div to the results container
      resultsContainer.appendChild(resultDiv);
    });
};

// Future Mission
document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("click", () => {
    planet.querySelectorAll(".mission-list").forEach(mission => {
      mission.classList.add("active");
    });
  });
});
