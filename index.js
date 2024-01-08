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

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links, state)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender();
}
function afterRender() {
  // selected planet and mission name
  function toggleMenu() {
    var navbarNav = document.getElementById("navbarNav");
    if (navbarNav.style.display === "none") {
      navbarNav.style.display = "block";
    } else {
      navbarNav.style.display = "none";
    }
    document
      .getElementById("menu_toggle")
      .addEventListener("click", toggleMenu);
  }
  toggleMenu();
  document
    .getElementById("sub-menu")
    .addEventListener("submit", function(event) {
      event.preventDefault();

      // Get the selected planet
      const selectedPlanet = document.querySelector(
        'input[name="planet"]:checked'
      ).value;

      // Get the mission name
      const missionName = document.getElementById("mission").value;

      // Get the table
      const table = document.querySelector("#sub-menu table");

      // Create a new table row
      const resultRow = document.createElement("tr");

      // Create table data for the mission name and selected planet
      const missionData = document.createElement("td");
      missionData.textContent = missionName;

      const planetData = document.createElement("td");
      planetData.textContent = selectedPlanet;

      // Create an img element for the planet image
      const planetImage = document.createElement("img");
      planetImage.src = getPlanetImage(selectedPlanet);
      planetImage.alt = selectedPlanet;

      const imageCell = document.createElement("td");
      imageCell.appendChild(planetImage);

      // Append the table data to the table row
      resultRow.appendChild(missionData);
      resultRow.appendChild(planetData);
      resultRow.appendChild(imageCell);

      // Append the table row to the table
      table.appendChild(resultRow);

      // Clear input values
      document.getElementById("mission").value = "";
    });
}

// Function to get the image URL for the selected planet
function getPlanetImage(planet) {
  switch (planet) {
    case "Mercury":
      return `${Mercury}`;
    case "Venus":
      return `${Venus}`;
    case "Earth":
      return `${Earth}`;
    case "Mars":
      return `${Mars}`;
    case "Jupiter":
      return `${Jupiter}`;
    case "Saturn":
      return `${Saturn}`;
    case "Uranus":
      return `${Uranus}`;
    case "Neptune":
      return `${Neptune}`;
  }
}
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
