const Workout = require('../models/workouts');

const router = require('express').Router();

// POST 
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

router.put('/api/workouts/:id', (req, res) => {
    
})