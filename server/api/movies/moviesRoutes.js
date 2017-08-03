const express = require('express');
const moviesRoutes = express.Router();
const { getFavoritesMovies, getFavoritesMovie, saveFavoritesMovies,
        updateFavoriteMovie, deleteFavoriteMovie } = require('./moviesModels.js');
const sendJSONresp = require('../../libs/sendJsonResp.js');

moviesRoutes.route('/')
   .get(getFavoritesMovies, sendJSONresp)
   .post(saveFavoritesMovies);

moviesRoutes.route('/:id')
   .get(getFavoritesMovie, sendJSONresp)
   .put(updateFavoriteMovie)
   .delete(deleteFavoriteMovie);

module.exports = {
  moviesRoutes,
}
