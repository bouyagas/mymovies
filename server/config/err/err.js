const path = require('path');

const clientErr = (err, req, res, next) => {
  console.error(err.message);
  res.status(404).sendFile(path.join(__dirname, '../../../public/notFound.html'));
  next();
};

const serverErr  = (err, req, res, next) => {
  console.error(err.message);
  res.status(404).sendFile(path.join(__dirname, '../../../internalServerError.html'));
  next();
};


module.exports = {
  clientErr,
  serverErr,
}
