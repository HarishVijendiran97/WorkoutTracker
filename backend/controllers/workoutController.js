const { default: mongoose } = require("mongoose");
const WorkoutModel = require("../models/workoutModels");
//?00000000000000000000000000000000000000000000000000000
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutModel.find().sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//?00000000000000000000000000000000000000000000000000000
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid workout ID" });
  }

  try {
    const workout = await WorkoutModel.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//?00000000000000000000000000000000000000000000000000000
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await WorkoutModel.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//?00000000000000000000000000000000000000000000000000000
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid workout ID" });
  }

  try {
    const workout = await WorkoutModel.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//?00000000000000000000000000000000000000000000000000000
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid workout ID" });
  }

  try {
    const workout = await WorkoutModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//?00000000000000000000000000000000000000000000000000000
module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
