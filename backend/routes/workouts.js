const express = require('express')
 //const workout = require('../models/workoutModel')
const router = express.Router()
const {
    createWorkout,
    getAllWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutcontroller')

//GET all workouts
router.get('/',getAllWorkouts)

//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)


//UPDATE a workout
router.patch('/:id',updateWorkout)



module.exports = router