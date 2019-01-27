const orm = require('./../config/orm.js');

const task = {
    selectTasks: function(cb) {
        orm.selectAll('tasks', cb);
    },

    newTask: function(value) {
        orm.insertOne('tasks', 'task', value);
    },

    toggleDone: function(id) {
        orm.updateOne('tasks', 'done', 'NOT done', 'id', id);
    },

    updateTask: function(newTask, id) {
        orm.updateOne('tasks', 'task', newTask, 'id', id);
    }
}

module.exports = task;
