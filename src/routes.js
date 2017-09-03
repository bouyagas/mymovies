import React from 'react';
import { Route, IndexRoute} from 'react-router';
import MoviesContainer from './Component/MoviesContainer/MoviesContainer.jsx';
import LastestMoviesContainer from './Component/LastestMoviesContainer/LastestMoviesContainer.jsx';

import App from './Component/App/App.jsx';


module.exports = (
 <Route path='/' component={App} >
   <IndexRoute component={MoviesContainer} />
   <Route path='/lastest' component={LastestMoviesContainer} />
 </Route>
 )
