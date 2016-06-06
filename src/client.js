/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Router, browserHistory } from 'react-router';

import client from './helpers/ApolloClient';
import routes from './routes';

const dest = document.getElementById('content');
console.log(dest)

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </ApolloProvider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

// if (__DEVTOOLS__ && !window.devToolsExtension) {
//   const DevTools = require('./containers/DevTools/DevTools');
//   ReactDOM.render(
//     <ApolloProvider client={client}>
//       <div>
//         <Router history={browserHistory}>
//           {routes}
//         </Router>
//         <DevTools />
//       </div>
//     </ApolloProvider>,
//     dest
//   );
// }
