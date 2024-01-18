import mongoose from "mongoose";

const MissionSchema = new mongoose.Schema({
  traveler: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  planet: [String],
  missionType: {
    type: String,
    required: true,
    enum: ["Orbiter", "Flyby", "Rover", "Human", "Drone"]
  },
  missionName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Mission = mongoose.model("Mission", MissionSchema);

export default Mission;
