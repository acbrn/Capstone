import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

// Import planet images
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
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;

  afterRender(state);
}
router.updatePageLinks();

function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("hidden");
  });

  if (state.view === "Home") {
    // Do this stuff when on Home view
    document.getElementById("earth").addEventListener("click", event => {
      event.preventDefault();
      router.navigate("/planets");
    });
  }

  if (state.view === "Form") {
    // Do this stuff when on Form view
    document.querySelector("#planet-form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;

      // Accessing form elements using their names
      const planetValue = inputList.planet.value;
      const userValue = inputList.user.value;
      const missionsValue = inputList.missions.value;
      const newMissionValue = inputList.newMission.value;

      if (inputList && inputList.newMission) {
        // Create a new mission
        const newMission = {
          planet: planetValue,
          missions: missionsValue,
          type: newMissionValue,
          user: userValue
        };

        // Log the new mission to the console
        console.log("New Mission", newMission);

        // Add the new mission to the store
        store.Submit.missions.push(newMission);

        // Create a request body object to send to the API
        const requestData = {
          planet: planetValue,
          missions: missionsValue,
          user: userValue,
          type: newMissionValue
        };

        // Log the request body to the console
        console.log("Request Body", requestData);

        // Send the request to the API
        axios
          .post(`${process.env.PLANET_API_URL}/planets`, requestData)
          .then(response => {
            store.Planets.planets.push(response.data);
            router.navigate("/planets");
          })
          .catch(err => {
            console.log("Oh No!", err);
          });
      } else {
        console.error("Invalid or missing structure for inputList.newMission");
      }
    });
  }
}
router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=iowa%20city`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
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

      case "Planets":
        axios
          .get(`${process.env.PLANET_API_URL}/planets`)
          .then(response => {
            console.log("Response", response.data);
            store.Planets.planets = response.data;
            done();
          })
          .catch(err => {
            console.log("Oh No!", err);
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
      const view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
