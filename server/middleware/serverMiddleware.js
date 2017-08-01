require('dotenv').config();
const logger  = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');

module.exports = (server) => {
  server.use(logger('dev'));
  server.use(compression());
  server.use(cookieParser());
  server.use(bodyParser.json());
  server.use(helmet());
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token_authorization');
    next();
  });
};
