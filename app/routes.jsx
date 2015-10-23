import React from 'react';
import { Router, Route } from 'react-router';
import { generateRoute } from 'utils/localized-routes';

export default (
  <Router>
    <Route component={ require('./components/app') }>
      { generateRoute({
        paths: ['/', '/feed'],
        component: require('./components/feed')
      }) }
      { generateRoute({
        paths: ['/groups'],
        component: require('./components/groups')
      }) }
      { generateRoute({
        paths: ['/feed/:id'],
        component: require('./components/post')
      }) }
      { generateRoute({
        paths: ['/profile'],
        component: require('./components/profile')
      }) }
      { generateRoute({
        paths: ['/protected'],
        component: require('./components/protected')
      }) }
      <Route path='*' component={ require('./pages/not-found') } />
    </Route>
  </Router>
);
