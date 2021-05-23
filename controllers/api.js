const router = require('express').Router();

router.post('/api/workouts/', (req, res) => {
    Workout.create(req.body)
    .then((workoutdb) => {
        res.json(workoutdb)
    })
    .catch((error) => {
        res.json(error)
    })
})

router.put('/api/workouts/:id', (req, res) => {
    
})