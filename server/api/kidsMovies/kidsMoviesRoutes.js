const express = require('express');
const kidsMoviesRoute = express.Router();
const { getAllKidsMovies } = require('./kidsMoviesModels.js');
const sendJSONresp = require('../../libs/sendJsonResp.js');


kidsMoviesRoute.route('/')
  .get(getAllKidsMovies, sendJSONresp);


module.exports = {
  kidsMoviesRoute,
}
