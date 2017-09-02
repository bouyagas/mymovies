import React from 'react';
import MoviesItem from './MoviesItem/MoviesItem.jsx';
import './MoviesContainer.css';

export default class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     movies: [],
     movie: {
       title: '',
       picture: '',
       actor: '',
       genre: '',
       release: '',
       price:  '',
       description: ''
     },
    }
  }

   componentDidMount() {
      this.getAllFavaritesMovies();
   }
    alertInfo(msg) {
      alert(msg);
    }

    getAllFavaritesMovies() {
      fetch('/api/movies', {
       headers: {
        'content-type': 'application/json',
       },
         method: 'GET',
       })
      .then(r => r.json())
      .then((data) => {
        console.log(data);
         this.setState({
          movies: data,
        });
      })
      .catch(err => console.log('getAllFavaritesMovies', err))
    }

    saveFavoritesMovies() {
      fetch('/api/post', {
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
      })
      body: JSON.stringify({
        title: this.state.movie.title,
        actor: this.state.movie.actor,
        genre: this.state.movie.genre,
        release: this.state.movie.release,
        price: this.state.movie.price,
        picture: this.state.movie.picture,
        description: this.state.movie.description
      })
       .then(this.setState({
          movie: {
            title: '',
            actor: '',
            genre: '',
            release: '',
            price:  '',
            picture: '',
            description: ''
          },
        }))
       .then(this.alertInfo('A movie has been saved'))
       .catch(error => console.log(error));
    }

    deleteFavoriteMovies(id) {
      fetch(`/api/movies/${id}`, {
        method: 'DELETE'
       })
      .then(() => {
        let movies = this.state.movies.filter((movie) => {
          return movie.id !== id;
        });
        this.setState({ movies });
      })
      .catch(error => console.log(error));
    }



  render() {
     const mymovies = this.state.movies.map((movie, i) => {
        return (
           <MoviesItem
                key={i}
                title={movie.title}
                picture={movie.picture}
                actor={movie.actor}
                genre={movie.genre}
                release={movie.release}
                price={movie.price}
                description={movie.description}
             />
           )
        });

    return (
        <div className="moviescontainer">
         { mymovies }
      </div>
    );
  }
}





