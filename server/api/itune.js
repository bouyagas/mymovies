const express = require('express');
const ituneRouter = express.Router();
const { searchMovies }  = require('../../services/itune.js');
const sendJSONresp = (req, res) => res.json( res.result  || []);


ituneRouter.route('/')
      .get(ituneRouter, sendJSONresp)


module.exports = {
  ituneRouter,
};
