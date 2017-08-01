const express = require('express');
const moviesRoutes = express.Router();
const { getFavoritesMovies, saveFavoritesMovies, deleteFavoriteMovies } = require('./moviesModels.js');
const sendJSONresp = require('../../libs/sendJsonResp.js');

moviesRoutes.route('/')
   .get(getFavoritesMovies, sendJSONresp)
   .post(saveFavoritesMovies);

moviesRoutes.route('/:id')
   .delete(deleteFavoriteMovies);

   module.exports = {
      moviesRoutes
   }
