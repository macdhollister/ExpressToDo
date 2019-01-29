const express = require('express');
const router = express.Router();
const path = require('path');
const task = require('./../models/task.js');

router.get('/', (req, res) => {
    // get data from database
    let tasks;
    task.selectTasks((error, result) => {
        // if (error) throw error;

        tasks = result;
        for (let i = 0; i < tasks.length; i++) {
            tasks[i] = {
                task: {
                    id: tasks[i].id,
                    text: tasks[i].task,
                    done: tasks[i].done
                }
            }
        }
       
        res.render('index', {
            tasks: tasks
        })
    })
})

router.post('/api/data', (req, res) => {
    task.newTask(req.body.newTask);
})

router.put('/api/data/:id/done', (req, res) => {
    task.toggleDone(req.params.id);
})

router.put('/api/data/:id/task', (req, res) => {
    task.updateTask(req.body.updatedTask, req.params.id);
})

router.delete('/api/data/:id/delete', (req, res) => {
    task.deleteTask(req.params.id);
})

module.exports = router;