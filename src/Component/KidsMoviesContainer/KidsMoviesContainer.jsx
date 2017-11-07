import React from 'react';
import './KidsMoviesContainer.css';
import KidsMoviesItem from '../KidsMoviesContainer/KidsMoviesItem/KidsMoviesItem.jsx';

export default class KidsMoviesContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      kidMovies: [],

      kidMovie: {
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
    this.getkidMovies();
  }

  getkidMovies() {
    fetch('/api/kids', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    })
    .then((response) => {
      return response.json();
       })
    .then((data) => {
      console.log(data);
      this.setState({
        kidsMovies: data,
      });
    })
    .catch(error => console.log(error));
}

render() {
  const kidmovies = this.state.kidMovies.map((movie, i) => {
    return (
     <KidsMoviesItem
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
    <div>
      <h1>KidsMoviesContainer</h1>
      { kidmovies }
    </div>
    );
  }
}
