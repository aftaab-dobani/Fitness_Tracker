const Workout = require('../models/workouts');

const router = require('express').Router();

// POST 
router.post('/api/workouts', (req, res) => {
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

// GET 
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }

    }])
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ])
    .sort({_id: -1 })
    .limit(7)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

module.exports = router; 