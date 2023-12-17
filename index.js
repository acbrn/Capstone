import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import Mercury from "./assets/img/mercury.png";
import Venus from "./assets/img/venus.png";
import Earth from "./assets/img/earth.png";
import Mars from "./assets/img/mars.png";
import Jupiter from "./assets/img/jupiter.png";
import Saturn from "./assets/img/saturn.png";
import Uranus from "./assets/img/uranus.png";
import Neptune from "./assets/img/neptune.png";
import Pluto from "./assets/img/pluto.png";
import Satellite from "./assets/img/space-satellite.png";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links, state)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
}

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

// selected planet and mission name
document.getElementById("sub-menu").addEventListener("submit", function(event) {
  event.preventDefault();

  var selectedPlanet = document.getElementById("planet").value;
  var missionName = document.getElementById("mission").value;

  // Create a new result entry
  var resultEntry = document.createElement("div");
  resultEntry.innerHTML = "<h2>Your Selection:</h2>";
  resultEntry.innerHTML += "<p>Selected Planet: " + selectedPlanet + "</p>";
  resultEntry.innerHTML += "<p>Mission Name: " + missionName + "</p>";
  resultEntry.innerHTML +=
    '<img class="planetImage" src="' +
    getPlanetImage(selectedPlanet) +
    '" alt="Planet Image">';

  document.getElementById("result").appendChild(resultEntry);

  document.getElementById("planet").value = "";
  document.getElementById("mission").value = "";
});

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
    case "Pluto":
      return `${Pluto}`;
    default:
      return `${Satellite}`;
  }
}
