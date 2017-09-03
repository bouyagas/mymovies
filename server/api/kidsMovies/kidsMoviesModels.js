const db = require('../../libs/dbConfig.js');

const getAllKidsMovies = (req, res, next) => {
   db.any(`SELECT * FROM movies WHERE genre = 'Kids & Family' LIMIT 5;`)
   .then((movies) => {
    res.data = movies;
    next();
   })
   .catch(error => next(error));
};

module.exports = {
  getAllKidsMovies,
}
