import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  type: {
    type: String,
    validate: {
      validator: function(v) {
        // Check if the mission name is a string
        return typeof v === "string";
      },
      message: props => `${props.value} is not a valid mission name!`
    }
  }
});

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // return `true` if `v` is a non-empty string, `false` otherwise
        return typeof v === "string" && v.length > 0;
      },
      message: props => `${props.value} is not a valid planet name!`
    }
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
