import { Router } from "express";
import Planet from "../models/Planet.js";

const router = Router();

// Create planet route handles "/planets"
router.post("/", async (request, response) => {
  try {
    const newPlanet = new Planet(request.body);
    const data = await newPlanet.save();
    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all pizzas route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Planet.find(query); // Pass the query object into find;
    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single planet by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Planet.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a planet by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Planet.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
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
          planet: body.planet,
          user: body.user,
          missions: body.missions,
          missionName: body.missionName
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
export default router;
