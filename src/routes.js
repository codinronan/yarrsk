import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Store from './store';

import App from './containers/App';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

const history = syncHistoryWithStore(browserHistory, Store);

export default (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);
