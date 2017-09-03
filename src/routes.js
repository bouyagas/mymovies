import React from 'react';
import { Route, IndexRoute} from 'react-router';
import ActionMoviesContainer from './Component/ActionMoviesContainer/ActionMoviesContainer.jsx';
import DocumentaryMoviesContainer from './Component/DocumentaryMoviesContainer/DocumentaryMoviesContainer.jsx';
import LastestMoviesContainer from './Component/LastestMoviesContainer/LastestMoviesContainer.jsx';
import MoviesContainer from './Component/MoviesContainer/MoviesContainer.jsx';
import OldSchoolMoviesContainer from './Component/OldSchoolMoviesContainer/OldSchoolMoviesContainer.jsx';
import KidsMoviesContainer from './Component/KidsMoviesContainer/KidsMoviesContainer.jsx';
import App from './Component/App/App.jsx';


module.exports = (
 <Route path='/' component={App} >
   <IndexRoute component={MoviesContainer} />
   <Route path='/lastest' component={LastestMoviesContainer} />
   <Route path='/oldschool' component={OldSchoolMoviesContainer} />
   <Route path='/kids' component={KidsMoviesContainer}/>
   <Route path='/documentary' component={DocumentaryMoviesContainer} />
   <Route path='/action' component={ActionMoviesContainer}/>
 </Route>
 )
