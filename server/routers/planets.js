import { Router } from "express";
import Planet from "../models/Planet.js";

const router = Router();

// GET all planets
router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await Planet.find(query);
    response.json(data);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

// POST a new planet
router.post("/", async (request, response) => {
  try {
    const newPlanet = new Planet(request.body);
    const data = await newPlanet.save();
    response.json(data);
  } catch (error) {
    console.error(error);
    if ("name" in error && error.name === "ValidationError") {
      response.status(400).json(error.errors);
    } else {
      response.status(500).json({ error: "Something went wrong" });
    }
  }
});

// GET a single planet by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Planet.findById(request.params.id);
    response.json(data);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

// DELETE a planet by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Planet.findByIdAndRemove(request.params.id);
    response.json(data);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

// PUT/UPDATE a planet by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const data = await Planet.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          type: body.type,
          moons: body.moons,
          distanceFromSun: body.distanceFromSun,
          missions: body.missions
        }
      },
      {
        new: true
      }
    );
    response.json(data);
  } catch (error) {
    console.error(error);
    if ("name" in error && error.name === "ValidationError") {
      response.status(400).json(error.errors);
    } else {
      response.status(500).json({ error: "Something went wrong" });
    }
  }
});

const createPlanetWithMissions = async () => {
  try {
    const newPlanet = new Planet(validPlanetWithMissions);
    const savedPlanet = await newPlanet.save();
    console.log("Planet with missions saved:", savedPlanet);
  } catch (error) {
    console.error("Error creating/saving planet with missions:", error);
    // Handle specific validation errors or other error types
  }
};
// Call the function to create a planet with missions
createPlanetWithMissions();
// Export the router
export default router;
