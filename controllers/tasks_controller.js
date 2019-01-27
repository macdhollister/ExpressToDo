const express = require('express');
const router = express.Router();
const path = require('path');
const task = require('./../models/task.js');

router.get('/', (req, res) => {
    // res.render(...)
    res.sendFile(path.join(__dirname, './../views/test.html'))
})

router.post('/api/data', (req, res) => {
    task.newTask(req);
})

router.put('/api/data/:id/done', (req, res) => {
    task.toggleDone(req.params.id);
})

router.put('/api/data/:id/task', (req, res) => {
    task.updateTask(req.body.updatedTask, req.params.id);
})

module.exports = router;