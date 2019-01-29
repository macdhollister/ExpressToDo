// Package requirements
const express = require('express');
const exphbs = require("express-handlebars");

// Setting up Express
const app = express();
const PORT = process.env.PORT || 8080;

// Routes
const apiRoutes = require('./controllers/tasks_controller.js');
// const htmlRoutes = ...;

// Data parsing for Express
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', apiRoutes);
// app.use('/', htmlRoutes);

// Setting up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})