import express from 'express';
import { apolloServer } from 'apollo-server';
import Schema from './data/schema';
import Mocks from './data/mocks';

import config from '../src/config';
const ENDPOINT = '/graphql';

const graphQLServer = express();
graphQLServer.use(ENDPOINT, apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  mocks: Mocks,
}));

if (config.apiPort) {
  graphQLServer.listen(config.apiPort, () => {
    console.info('----\n==> 🌎  GraphQL Server is running on port %s', config.apiPort);
    console.info('==> 💻  Send queries to http://%s:%s%s', config.apiHost, config.apiPort, ENDPOINT);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
