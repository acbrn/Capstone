import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  type: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/,
    message: props => `${props.value} is not a valid planet name!`
  }
});

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/,
    message: props => `${props.value} is not a valid planet name!`
  },
  type: {
    type: String,
    required: true,
    enum: ["terrestrial", "gas giant", "ice giant"]
  },
  moons: {
    type: Number,
    required: true,
    min: 0
  },
  distanceFromSun: {
    type: Number,
    required: true,
    min: 0
  },
  missions: [missionSchema] // array of mission sub-documents
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;
