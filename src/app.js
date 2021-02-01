const express = require('express');

const app = express();

app.use(express.static('./../public'));
app.listen(3000, () => console.log("Up & Running Turrito"));

// File

app.use(express.urlencoded({extended: false}))

// Template engine

app.set('view engine', 'ejs')
app.set('views', './src/views')

//Routes

const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/', mainRoutes);
app.use('/user', userRoutes);