import React from 'react';
import './SearchMovies.css'
export default class SearchMovies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itune: [],
      searchName: '',
       movie: {
         title: '',
         actor: '',
         genre: '',
         release: '',
         price:  '',
         picture: '',
         description: ''
       },
    }
  }

   getItunesMovies(movies) {
       fetch(`/api/itunes/${movies}`)
       .then(r => r.json())
       .then((data) => {
       	console.log(data);
       	this.setState({
	       	movie: {
	         title: data.results.trackName,
	         actor: data.results.artistName,
	         genre:  data.results.primaryGenreName,
	         release: data.results.releaseDate,
	         price:  data.results.trackHdPrice,
	         picture: data.results.artworkUrl100,
	         description: data.results.longDescription
	       },
       	});
       })
        .then(this.getFavoritesMovies)
        .catch(error => console.log(error));
      }

  handleUpdateItunesMovies(event){
    this.setState({
      searchName: event.target.value,
    });
   }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.searchName} className="input" onChange={this.handleUpdateItunesMovies.bind(this)} name="search"/>
        <button type="submit" value="text" className="btn btn-large waves-effect pink darken-3 black-text" onClick={this.getItunesMovies.bind(this)}>Submit</button>
      </div>
    );
  }
}
