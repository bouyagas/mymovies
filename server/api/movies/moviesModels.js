const db = require('../../libs/dbConfig.js');

const getFavoritesMovies = (req, res, next) => {
   db.any(`SELECT * FROM movies;`)
     .then((movies) => {
      res.data = movies;
     next();
  })
   .catch(error => next(error));
};

const getFavoritesMovie = (req, res, next) => {
  let moviesID =  Number.parseInt(req.params.id);
  db.one(`SELECT * FROM movies WHERE id = $1;`, moviesID)
  .then((movies) => {
    res.data = movies;
    next();
  })
  .catch(error => next(error));
};

const saveFavoritesMovies = (req, res, next) => {
   db.none(`INSERT INTO movies (trackName, artistName, primaryGenreName, releaseDate, trackHdPrice, artworkUrl100, longDescription)
             VALUES ($1, $2, $3, $4, $5, $6, $7);`,
           [req.body.trackName, req.body.artistName, req.body.primaryGenreName, req.body.releaseDate, req.body.trackHdPrice, req.body.artworkUrl100, req.body.longDescription, req.params.id])
      .then((movies) => {
      res.data = movies;
      next();
    })
    .catch(error => next(error));
};

const updateFavoriteMovie = (req, res, next) => {
  let moviesID =  Number.parseInt(req.params.id);
   db.none(`UPDATE movies SET trackName = $1, artistName = $2, primaryGenreName = $3, releaseDate = $4, trackHdPrice = $5, artworkUrl100 = $6, longDescription = $7 WHERE id = $8;`,
             [req.body.trackName, req.body.artistName, req.body.primaryGenreName, req.body.releaseDate, req.body.trackHdPrice, req.body.artworkUrl100, req.body.longDescription, moviesID])
   .then(() => {
     next();
   })
   .catch(error => next(error));
};

const deleteFavoriteMovie = (req, res, next) => {
let moviesID =  Number.parseInt(req.params.id);
  db.none( `DELETE FROM movies WHERE id = $1;`, moviesID)
  .then(() => {
     next();
  })
 .catch(error => next(error));
};

module.exports = {
  getFavoritesMovies,
  getFavoritesMovie,
  saveFavoritesMovies,
  updateFavoriteMovie,
  deleteFavoriteMovie
};
