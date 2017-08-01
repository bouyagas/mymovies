const db = require('../../libs/dbConfig.js');

const getFavoritesMovies = (req, res, next) => {
   db.any(`SELECT * FROM movies`)
     .then((movies) => {
      res.data = movies;
     next();
  })
   .catch(error => next(error));
};

const saveFavoritesMovies = (req, res, next) => {
   db.none(`INSERT INTO movies (trackName, artistName, primaryGenreName, releaseDate, trackHdPrice, artworkUrl100, longDescription)
             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
           [req.body.trackName, req.body.artistName, req.body.primaryGenreName, req.body.releaseDate, req.body.trackHdPrice, req.body.artworkUrl100, req.body.longDescription])
      .then(() => {
        next();
      })
      .catch(error => next(error));
};

const deleteFavoriteMovies = (req, res, next) => {
  db.none( `DELETE * FROM movies WHERE id = $1`, [req.params.id])
  .then(() => {
     next();
  })
 .catch(error => next(error));
};

module.exports = {
  getFavoritesMovies,
  saveFavoritesMovies,
  deleteFavoriteMovies
};
