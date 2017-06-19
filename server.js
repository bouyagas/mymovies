require('dotenv').config();
const express = require('express');
const logger  = require('morgan');
const bodyPaser = require('body-parser');
const path = require('path');

const server = express();
const port = process.argv[2] || process.env.Port || 3000;

server.use(logger('dev'));
server.use(bodyPaser.json());
server.use(express.static(path.join(__dirname, 'dist')));

server.listen(port, console.log(`Up and running ${port} :)`));
