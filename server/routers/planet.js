import { Router, response } from "express";
import Planet from "../models/Planet.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const planet = new Planet(req.body);

    const data = await planet.save();

    response.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json({ message: error.message });

    return response.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const planets = await Planet.find(query);
    res.json(planets);
  } catch (error) {
    return;
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);

    res.json(planet);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Planet.findByIdAndDelete(req.params.id, {});
    res.json(data);
  } catch (error) {
    return;
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const body = req.body;

    const data = await Planet.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          planet: body.planet,
          user: body.user,
          missions: body.missions,
          typeofMission: body.typeofMission
        }
      },
      { new: true }
    );
    res.json(data);
  } catch (error) {
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json({ message: error.message });
    return res.status(400).json({ message: error.message });
  }
});

export default router;
