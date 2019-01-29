const orm = require('./../config/orm.js');

const task = {
    selectTasks: function(cb) {
        orm.selectAll('tasks', cb);
    },

    newTask: function(value) {
        orm.insertOne('tasks', 'task', value);
    },

    toggleDone: function(id) {
        orm.toggleBool('tasks', 'done', 'done', 'id', parseInt(id));
    },

    updateTask: function(newTask, id) {
        orm.updateOne('tasks', 'task', newTask, 'id', parseInt(id));
    },

    deleteTask: function(id) {
        orm.deleteOne('tasks', 'id', parseInt(id));
    }
}

module.exports = task;
