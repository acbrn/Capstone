import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  type: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
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
  missions: [missionSchema]
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
