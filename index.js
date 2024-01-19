import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize, get } from "lodash";
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
import satellite from "./assets/img/space-satellite.png";
import { json } from "stream/consumers";

//Function to display planet images randomly on the home page

function randomPlanet() {
  const planetImages = [
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune
  ];
  const randomImage = Math.floor(Math.random() * planetImages.length);
  return planetImages[randomImage];
}

const router = new Navigo("/");
function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}
function afterRender(state) {
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("hidden");
  });

  if (state.view === "Home") {
    //Do this stuff when on Home view
    document.getElementById("satellite").addEventListener("click", event => {
      event.preventDefault();
      router.navigate("/planets");
    });
  }
  if (state.view === "Form") {
    //Add event listener to form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      //Get the form elements
      const missionInput = event.target.elements;
      console.log("Here is element list", missionInput);

      //Create an empty array to hold the mission type
      const missionType = [];
      //Iterate over the mission type checkboxes
      for (let i = 0; i < missionInput.newMission.length; i++) {
        //If a checkbox is checked, add the value to the mission type array
        if (missionInput.newMission[i].checked) {
          missionType.push(missionInput.newMission[i].value);
        }
      }
      //Create a new mission object
      const newMission = {
        missionName: missionInput.missionName.value,
        planet: missionInput.planet.value,
        missionType: missionType,
        traveler: missionInput.user.value
      };
      //Create a request body object to send to the API
      const requestBody = {
        mission: newMission
      };
      //Log the request body to the console
      console.log("Here is the request body", requestBody);
      //Make a POST request to the API
      axios
        .post(`${process.env.PLANET_API_URL}/planet`, requestBody)
        .then(response => {
          //Log the response from the API to the console
          console.log("Here is the response", response.data);
          //Navigate to the mission page to see the new mission
          router.navigate("/NewMission");
        })
        .catch(error => {
          console.log(error);
        });
    });
  }
  if (state.view === "NewMission") {
    //Need table to display mission information
    const table = document.querySelector("table");
    //Need tbody to append rows to
    const tbody = document.querySelector("tbody");
    //Need a template to create rows
    const template = document.querySelector("#mission-row");
    //Need a fragment to hold the rows
    const fragment = document.createDocumentFragment();
    //Need a list of missions
    const missions = get(state, "mission", []);
    //Iterate over the list of missions
    missions.forEach(mission => {
      //Create a table row element
      const tr = document.importNode(template.content, true);
      //Add data to the row
      tr.querySelector(".mission-name").textContent = mission.missionName;
      tr.querySelector(".planet").textContent = mission.planet;
      tr.querySelector(".mission-type").textContent = mission.missionType.join(
        ", "
      );
      tr.querySelector(".traveler").textContent = mission.traveler;
      //Append the row to the fragment
      fragment.appendChild(tr);
    });
    //Append the fragment to the tbody
    tbody.appendChild(fragment);
    //Append the tbody to the table
    table.appendChild(tbody);

    //Add event listener to the button
    document.querySelector("button").addEventListener("click", event => {
      event.preventDefault();
      //Navigate to the form page
      router.navigate("/Form");
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
      case "About":
        axios
          .get(`${process.env.ISS_API_URL}`)
          .then(response => {
            const latlong = response.data.iss_position;
            store.About.isslocation = {
              latitude: latlong.latitude,
              longitude: latlong.longitude
            };
            console.log(response.data);
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Mission":
        axios
          .get(
            `https://planet-api-url.onrender.com=${process.env.PLANET_API_URL}`
          )
          .then(response => {
            const formatMission = mission => {
              return {
                missionName: mission.missionName,
                planet: mission.planet,
                missionType: mission.missionType,
                traveler: mission.traveler
              };
            };
            store.Mission.mission = response.data.map(formatMission);
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
