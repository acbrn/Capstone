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
    ],
    validate: /^[A-Za-z]*$/
  },
  user: {
    type: String,
    validate: /^[A-Za-z]*$/
  },
  missions: {
    type: String,
    validate: /^[A-Za-z]*$/
  },
  typeofMission: {
    type: String,
    enum: ["Orbiter", "Satellite", "Rover", "Human", "Drone"]
  }
});

const Planet = mongoose.model("Planet", planetSchema);
export default Planet;
