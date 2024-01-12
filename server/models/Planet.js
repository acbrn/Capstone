import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  planet: {
    type: String,
    required: true,
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
    required: true,
    validate: /^[A-Za-z]*$/
  },
  missions: {
    type: Number,
    required: true,
    min: 0,
    max: 4
  },
  typeofMission: {
    type: String,
    required: true,
    enum: ["Orbiter", "Satellite", "Human", "Drone"]
  }
});

const Planet = mongoose.model("Planet", planetSchema);
export default Planet;
