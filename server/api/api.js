const api = require('express').Router();
const { moviesRoutes } = require('../api/movies/moviesRoutes.js');
const { kidsMoviesRoute } = require('../api/kidsMovies/kidsMoviesRoutes.js');

api.use('/kids', kidsMoviesRoute);
api.use('/movies', moviesRoutes);

module.exports = api;

