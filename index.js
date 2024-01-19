import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

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
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("ul").classList.toggle("hidden");
  });
  if (state.view === "Home") {
    // Do this stuff
    document.getElementById("satellite").addEventListener("click", event => {
      event.preventDefault();
      router.navigate("/");
    });
  }
  if (state.view === "Form") {
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create an empty array to hold the toppings
      const typeMission = [];
      const planet = [];
      // Iterate over the typeMission array

      for (let input of inputList.typeMission) {
        // if the value of the checked attribute is true then add the value to the typeMission array
        if (input.checked) {
          typeMission.push(input.value);
        }
      }
      for (let input of inputList.planet) {
        // if the value of the checked attribute is true then add the value to the typeMission array
        if (input.checked) {
          planet.push(input.value);
        }
      }
      // Create a request body object to send to the API
      const requestData = {
        user: inputList.user,
        planet: planet,
        mission: inputList.missionName,
        typeMission: typeMission
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new planet
        .post(`${process.env.PLANET_API_URL}/planets`, requestData)
        .then(response => {
          //  Then push the new planet onto the NewMission state mission attribute, so it can be displayed in the mission list
          store.NewMission.mission.push(response.data);
          // Then Navigate to the NewMission view
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
      router.navigate("/NewMission");
    });
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
      // Add a case for each view that needs data from an API
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
      case "NewMission":
        axios
          .get(`${process.env.PLANET_API_URL}/planets`)
          .then(response => {
            store.NewMission.mission = response.data;
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
