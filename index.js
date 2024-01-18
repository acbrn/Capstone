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

  // Display random planet image on home page
  const earthImage = document.querySelector("#earth");
  if (earthImage) {
    earthImage.src = randomPlanet();
  }
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
    //Add event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      //Get the form element
      const inputList = event.target.elements;
      //Create an empty array to hold the type of missions
      const missionType = [];
      //Iterate over the mission type checkboxes
      for (let i = 0; i < inputList.length; i++) {
        //If the checkbox is checked, add the value to the missionType array
        if (inputList[i].checked) {
          missionType.push(inputList[i].value);
        }
      }
      //Create a request body object to send to the API
      const requestData = {
        missionName: inputList.missionName.value,
        planet: inputList.planet.value,
        missionType: missionType,
        traveler: inputList.traveler
      };
      //Log the request body to the console
      console.log("Request Body", requestData);
      axios
        //Make a POST request to the API to create new mission
        .post(`${process.env.PLANET_API_URL}/planet`, requestData)
        .then(response => {
          //Then push the new mission to the Mission state mission attribute, so it will be displayed on the page
          store.Mission.mission.push(response.data);
          //Then navigate to the /mission page
          router.navigate("/Mission");
        })
        //If there is an error, log it to the console
        .catch(error => console.log("Error", error));
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
          .get(`${process.env.PLANET_API_URL}/planet`)
          .then(response => {
            console.log("response", response.data);
            store.Form.mission = response.data;
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
