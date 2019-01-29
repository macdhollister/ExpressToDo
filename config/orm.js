const connection = require('./connection.js');

const orm = {
    selectAll: function(table, cb) {
        const queryString = 'SELECT * FROM ??'
        connection.query(queryString, [table], (err, res) => {
            cb(err, res);
        })
    },

    insertOne: function(table, column, value) {
        const queryString = 'INSERT INTO ?? (??) VALUES (?)'
        connection.query(queryString, [table, column, value], (err, res) => {
            if (err) throw err;
        })
    },

    toggleBool: function(table, column, value, filter, specification) {
        const queryString = 'UPDATE ?? SET ?? = NOT ?? WHERE ?? = ?'
        connection.query(queryString, [table, column, value, filter, specification], (err, res) => {
            if (err) throw err;
        })
    },

    updateOne: function(table, column, value, filter, specification) {
        const queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?;'
        connection.query(queryString, [table, column, value, filter, specification], (err, res) => {
            if (err) throw err;
        })
    },

    deleteOne: function(table, column, value) {
        const queryString = 'DELETE FROM ?? WHERE ?? = ?'
        connection.query(queryString, [table, column, value], (err, res) => {
            if (err) throw err;
        })
    }
}

module.exports = orm;
