const api = require('express').Router();
const { moviesRoutes } = require('../api/movies/moviesRoutes.js');
api.use('/movies', moviesRoutes);

module.exports = api;

