const express = require('express')

const router = express.Router()

const {
    getAllWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

//!Get all workouts
router.get('/', getAllWorkouts)

//!Get single workouts
router.get('/:id', getWorkout)

//!Post new workout
router.post('/', createWorkout)

//!Delete a workout
router.delete('/:id', deleteWorkout)

//!Update a workout
router.patch('/:id', updateWorkout)

module.exports = router