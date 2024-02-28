import { Router } from "express";
import Planet from "../models/Planet.js";

const router = Router();

// Create planet route handles POST requests to /Planet
router.post("/", async (request, response) => {
  try {
    //Create a new mission using the Planet model and the request body
    const planet = new Planet(request.body);
    // Save the mission to the database
    const data = await planet.save();
    // POST request returns the newly created mission including its _id
    response.json(data);
    console.log(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("user" in error && error.user === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all planet route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Planet.find(query);

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
    const data = await Planet.findByIdAndRemove(request.params.id, {});
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
          user: body.user,
          planet: body.planet,
          missionName: body.missionName,
          typeMission: body.typeMission
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

    if ("user" in error && error.user === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
