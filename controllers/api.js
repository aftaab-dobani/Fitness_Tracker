const Workout = require('../models/workouts');

const router = require('express').Router();

// POST 
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

// PUT 
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, {new: true, runValidators: true})
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

