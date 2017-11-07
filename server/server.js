const express = require('express');
const path = require('path');
const server = express();
const { clientErr, serverErr } = require('./config/err/err.js');
const middleware = require('./middleware/serverMiddleware.js');

// api
const api = require('./api/api.js');

//middleware
middleware(server);

// api
server.use('/api', api);
server.use('/api', api);

server.use(express.static(path.join(__dirname, '../dist')));
server.use(clientErr);
server.use(serverErr);

module.exports = server;

