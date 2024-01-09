import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  type: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const planetSchema = new mongoose.Schema({
  name: {
    enum: [
      "Mercury",
      "Venus",
      "Earth",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
      "Pluto",
      "Ceres"
    ]
  },
  type: {
    enum: ["Terrestrial", "Gas Giant", "Ice Giant", "Dwarf Planet", "Asteroid"]
  },
  moons:{
    type: Number,
    enum: [
      "Mercury": 0,
      "Venus": 0,
      "Earth": 1,
      "Mars": 2,
      "Jupiter": 79,
      "Saturn": 82,
      "Uranus": 27,
      "Neptune": 14,
      "Pluto": 5,
      "Ceres": 0
    ]
  },
  missions: [missionSchema], // array of mission sub-documents
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
