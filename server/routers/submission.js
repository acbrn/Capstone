import { Router } from "express";
import Planet from "../models/Planet.js";

const router = Router();

// Create planet route handles "/planets/"
router.post("/", async (request, response) => {
  try {
    const newPlanet = new Planet(request.body);
    const data = await newPlanet.save();
    response.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json({ error: "Something went wrong" });
  }
});

// Get all planets route
router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await Planet.find(query);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Something went wrong" });
  }
});

// Get a single planet by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Planet.findById(request.params.id);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Something went wrong" });
  }
});

// Delete a planet by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Planet.findByIdAndRemove(request.params.id);
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Something went wrong" });
  }
});

// Update a single planet by ID
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
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
