import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Feed from './components/Feed';
import Layout from './components/Layout';
import NewEntry from './components/NewEntry';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Feed} />
    <Route path="feed/:type" component={Feed} />
    <Route path="submit" component={NewEntry} />
  </Route>
);
