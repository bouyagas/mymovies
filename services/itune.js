const fetch = require('node-fetch');

const API_URL = 'https://itunes.apple.com/search?';


const searchMovies = (req, res, next) => {
  fetch(`${API_URL}term=${req.body.searchTerm}&media=movie&entity=movie&attribute=movieTerm`)
  .then(r => r.json())
  .then((movies) => {
    res.result = movies
    next();
  })
  .catch((error) => {
   res.error = error
  });
}

module.exports = {
  searchMovies
};
