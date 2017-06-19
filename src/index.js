'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import App from './App/App.jsx';

const router = (
   <Router history={hashHistory}>
        <Route path='/' component={App} />
   </Router>

)


ReactDOM.render((router), document.querySelector('#root-container'));
