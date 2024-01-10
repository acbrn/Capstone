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

const planets = [
  {
    id: 1,
    name: "Mercury",
    image: Mercury,
    planet: "Mercury",
    missions: "Mariner 10, MESSENGER, BepiColombo"
  },
  {
    id: 2,
    name: "Venus",
    image: Venus,
    planet: "Venus",
    missions: "Mariner 2, Venera 7, Magellan"
  },
  {
    id: 3,
    name: "Earth",
    image: Earth,
    planet: "Earth",
    missions: "Apollo 11, Voyager 1, Cassini"
  },
  {
    id: 4,
    name: "Mars",
    image: Mars,
    planet: "Mars",
    missions: "Mariner 4, Viking 1, Curiosity"
  },
  {
    id: 5,
    name: "Jupiter",
    image: Jupiter,
    planet: "Jupiter",
    missions: "Pioneer 10, Voyager 1, Juno"
  },
  {
    id: 6,
    name: "Saturn",
    image: Saturn,
    planet: "Saturn",
    missions: "Pioneer 11, Voyager 1, Cassini"
  },
  {
    id: 7,
    name: "Uranus",
    image: Uranus,
    planet: "Uranus",
    missions: "Voyager 2, Hubble Space Telescope, Cassini"
  },
  {
    id: 8,
    name: "Neptune",
    image: Neptune,
    planet: "Neptune",
    missions: "Voyager 2, Hubble Space Telescope, Cassini"
  }
];
store.Home.planets = planets;
import oops from "./assets/img/404img.gif";

const router = new Navigo("/");
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)} ${Nav(store.Links)} ${Main(state)} ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();

  function afterRender(state) {
    if (state.view === "Home") {
      document.querySelector(".weather").innerHTML = `
    <h2>Current Weather in ${state.weather.city}</h2>
    <p>${state.weather.temp}°F</p>
    <p>Feels like ${state.weather.feelsLike}°F</p>
    <p>${state.weather.description}</p>
    `;
    }
    if (state.view === "Planet") {
      document.querySelector(".planet").innerHTML = `
    <h2>${state.planet.name}</h2>
    <img src="${state.planet.image}" alt="${state.planet.name}" />
    <p>Planet: ${state.planet.planet}</p>
    <p>Missions: ${state.planet.missions}</p>
    `;
    }
    if (state.view === "Planets") {
      document.querySelector(".planetaryList").innerHTML = `
    <h2>Planets</h2>
    <ul>
      ${state.planets
        .map(
          planet => `
        <li>
          <a href="/planet/${planet.id}">
            <img src="${planet.image}" alt="${planet.name}" />
            <h3>${planet.name}</h3>
          </a>
        </li>
      `
        )
        .join("")}
    </ul>
    `;
    }
    if (state.view === "Viewnotfound") {
      document.querySelector(".viewnotfound").innerHTML = `
    <h2>404</h2>
    <img src="${oops}" alt="404" />
    <p>Sorry, we couldn't find that page.</p>
    `;
    }
    // Event listener for planet form
    if (state.view === "Form") {
      handleFormSubmission();
    }
  }
}
function handleFormSubmission() {
  document.querySelector("#planet-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const planet = form.planet.value;
    const missions = form.missions.value;
    const user = form.user.value;

    updateTable(missions, planet, user);

    const data = {
      planet,
      missions,
      user
    };

    axios
      .post(`${process.env.PLANET_API_URL}/planets`, data)
      .then(() => {
        router.navigate("/planets");
      })
      .catch(err => {
        console.log(err);
      });
  });
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
      // Add a case for each view that needs data from an API
      case "Planet":
        axios
          .get(`${process.env.PLANET_API_URL}/planets/${params.data.id}`)
          // Get the planet by ID
          .then(response => {
            // Store the planet in the store
            store.Planet.planet = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
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
