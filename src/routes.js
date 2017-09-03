import React from 'react';
import { Route, IndexRoute} from 'react-router';
import MoviesContainer from './Component/MoviesContainer/MoviesContainer.jsx';
import OldSchoolMoviesContainer from
import App from './Component/App/App.jsx';


module.exports = (
 <Route path='/' component={App} >
   <IndexRoute component={MoviesContainer} />
 </Route>
 )
