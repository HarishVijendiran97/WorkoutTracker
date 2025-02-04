const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");

const app = express();
app.use(express.json());

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(process.env.Mongo_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port:", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
