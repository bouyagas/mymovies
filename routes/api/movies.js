const express = require('express');
const moviesRoutes = express.Router();
const { getFavoritesMovies, saveFavoritesMovies, deleteFavoriteMovies } = require('../../models/favorites.js');
const sendJSONresp = (req, res) => res.json(res.movies || []);

moviesRoutes.route('/')
   .get(getFavoritesMovies, sendJSONresp)
   .post(saveFavoritesMovies);

moviesRoutes.route('/:id')
   .delete(deleteFavoriteMovies);

   module.exports = {
      moviesRoutes
   }

