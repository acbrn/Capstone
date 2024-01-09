import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routers/planets.js";

// Load environment variables from .env file
dotenv.config();
// Initialize the Express application
const app = express();

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
const PORT = process.env.PORT || 4040;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use("/", router);

app.get("/status", (request, response) => {
  // End and return the response
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
