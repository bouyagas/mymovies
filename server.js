require('dotenv').config();
const express = require('express');
const logger  = require('morgan');
const bodyPaser = require('body-parser');
const path = require('path');

const { moviesRoutes } = require('./routes/api/movies.js');

const server = express();
const port = process.argv[2] || process.env.Port || 3001;

server.use(logger('dev'));
server.use(bodyPaser.json());
server.use(express.static(path.join(__dirname, 'dist')));
server.use('/api/movies/', moviesRoutes);

server.listen(port, console.log(`Up and running ${port} :)`));
