import { Router, response } from "express";
import Planet from "../models/Planet.js";

const router = Router();

// Create mission route handles "/planets/"
router.post("/", async (req, res) => {
  try {
    console.log("Request body", req.body);
    const newMission = new Planet(req.body);
    const mission = await newMission.save();
    response.json(mission);
  } catch (error) {
    console.log(error);
    if ("traveler" in error && error.traveler === "ValidatorError" {
      return res.status(400).json({ traveler: error.errors.traveler.message });

      return res.status(500).json(error.errors);
  }
}
}
);

//Get all missions routes
router.get("/", async (req, res) => {
  try {
    const query = req.query;  // Defaults to an empty object

    const data = await Planet.find(query);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
);

//Get a single mission by ID
router.get("/:id", async (req, res) => {
  try {
  const data = await Planet.findById(req.params.id)
  response.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
);
//Delete a mission by ID
router.delete("/:id", async (req, res) => {
  try {
    const data = await Planet.findByIdAndDelete(req.params.id, {});
    response.json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

//Update a mission by ID
router.put("/:id", async (req, res) => {
  try {
    const body = req.body;
    const data = await Planet.findByIdAndUpdate(
      req.params.id, body,
      {
        $set: {
          missionName: body.missionName,
          planet: body.planet,
          missionType: body.missionType,
          traveler: body.traveler,
        }
        },
        { new: true }
    );
    response.json(data);
  } catch (error) {
    console.log(error);
    if ("traveler" in error && error.traveler === "ValidatorError" {
      return res.status(400).json({ traveler: error.errors.traveler.message });

      return res.status(500).json(error.errors);
  }
}
}
);

export default router;
