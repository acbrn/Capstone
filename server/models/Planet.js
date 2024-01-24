import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  planet: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  missionName: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  typeMission: [String]
});

const Planet = mongoose.model("Planets", planetSchema);

export default Planet;
