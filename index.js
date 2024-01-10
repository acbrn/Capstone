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

let PLANET_API_URL;

if (process.env.PLANET_API_URL) {
  PLANET_API_URL = process.env.PLANET_API_URL || "http://localhost:4040";
} else {
  console.log("Missing .env Falling back to PLANET_API_URL.");
}
document.addEventListener("DOMContentLoaded", function() {
  const router = new Navigo("/");

  function render(state = store.Home) {
    document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links, state)}
      ${Main(state)}
      ${Footer()}
    `;
    renderPlanetaryForm(state);
    router.updatePageLinks();
  }
  function renderPlanetaryForm(state = store.Form) {
    if (state.view === "Form") {
      const formElement = document.getElementById("planet-form");
      if (formElement) {
        formElement.addEventListener("submit", event => {
          event.preventDefault();
          handlePlanetaryFormSubmit(event.target.elements);
        });
      } else {
        console.error("Form with ID 'planet-form' not found");
      }
    }
  }

  function handlePlanetaryFormSubmit(inputs) {
    const planetaryData = {
      name: inputs.name.value,
      type: inputs.type.value,
      planet: inputs.planet.value,
      missions: inputs.missions.value
    };
    console.log(planetaryData);
    axios.get(``).catch(error => {
      console.log(error);
    });
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
            .catch(error => {
              console.log(error);
              done();
            });
          break;
        case "Planets":
          axios
            .get("/api/planets")
            .then(response => {
              store.Planets.planets = response.data;
              done();
            })
            .catch(error => {
              console.log(error);
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
});
