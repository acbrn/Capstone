import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  planets: {
    type: [
      {
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
      }
    ],
    required: true
  },
  name: {
    type: String,
    required: true,
    validate: {
      validator: /^[a-zA-Z]*$/,
      message: "Name should only contain letters."
    }
  },
  missions: {
    type: [String],
    default: []
  }
});

const Planet = mongoose.model("Planet", planetSchema);
export default Planet;
