import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  planet: {
    type: String,
    enum: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune"
    ]
  },
  user: {
    type: String,
    validate: /^[A-Za-z]+$/
  },
  missions: {
    type: String,
    validate: /^[A-Za-z]+$/
  },
  typeofMission: {
    type: String,
    enum: ["Rover", "Orbiter", "Human", "Drone"]
  }
});

const Planets = mongoose.model("Planets", planetSchema);
export default Planets;
