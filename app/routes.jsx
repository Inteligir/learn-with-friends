import React from 'react';
import { Router, Route } from 'react-router';
import { generateRoute } from 'utils/localized-routes';

export default (
  <Router>
    <Route component={ require('./components/app') }>
      { generateRoute({
        paths: ['/', '/feed'],
        component: require('./components/posts')
      }) }
      { generateRoute({
        paths: ['/protected', '/protege'],
        component: require('./components/protected')
      }) }
      { generateRoute({
        paths: ['/groups'],
        component: require('./components/groups')
      }) }
      { generateRoute({
        paths: ['/post/:id', '/post/:id'],
        component: require('./components/post')
      }) }
      { generateRoute({
        paths: ['/login-info', '/info-client'],
        component: require('./pages/login-info')
      }) }
      <Route path='*' component={ require('./pages/not-found') } />
    </Route>
  </Router>
);
