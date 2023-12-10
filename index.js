document.getElementById("sub-menu").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get selected planet and mission name
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
      return "mercury.png";
    case "Venus":
      return "venus.png";
    case "Earth":
      return "earth.png";
    case "Mars":
      return "mars.png";
    case "Jupiter":
      return "jupiter.png";
    case "Saturn":
      return "saturn.png";
    case "Uranus":
      return "uranus.png";
    case "Neptune":
      return "neptune.png";
    case "Pluto":
      return "pluto.png";
    default:
      return "space-satellite.png";
  }
}
