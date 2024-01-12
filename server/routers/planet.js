import { Router } from "express";
import Planet from "../models/Planet.js";

const router = Router();

//Create new route handles for GET, POST, PUT, and DELETE
//Create a POST route for /planet that creates a new planet
router.post("/", async (request, response) => {
  try {
    const newMission = new Planet(request.body);

    const data = await newMission.save();

    response.json(data);
  } catch (error) {
    console.log(error);
    if ("planet" in error && error.planet === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json({ error: "Something went wrong" });
  }
});

//Create a GET route for /planet that returns all planets
router.get("/", async (request, response) => {
  try {
    const query = request.query;
    const data = await Planet.find(query);
    response.json(data);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

//Create a GET route for /planet/:id that returns a planet by id
router.get("/:id", async (request, response) => {
  try {
    const planet = await Planet.findById(request.params.id);

    response.json(planet);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: "Something went wrong" });
  }
});

//Create a PUT route for /planet that updates a planet
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;
    const data = await Planet.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          missions: body.missions,
          user: body.user,
          typeofMission: body.typeofMission,
          planet: body.planet
        }
      },
      { new: true }
    );
    response.json(data);
  } catch (error) {
    console.log(error);
    if ("planet" in error && error.planet === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json({ error: "Something went wrong" });
  }
});

//Create a DELETE route for /planet that deletes a planet
router.delete("/:id", async (request, response) => {
  try {
    const data = await Planet.findByIdAndRemove(request.params.id, {});
    response.json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
