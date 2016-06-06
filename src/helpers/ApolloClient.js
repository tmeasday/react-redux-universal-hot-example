import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { addTypenameToSelectionSet } from 'apollo-client/queries/queryTransform';

// Globally register gql template literal tag
import { registerGqlTag } from 'apollo-client/gql';
registerGqlTag();


const client = new ApolloClient({
  networkInterface: createNetworkInterface('/graphql', {
    credentials: 'same-origin',
  }),
  queryTransformer: addTypenameToSelectionSet,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
  },
});

// XXX: not sure if I should be doing this?
client.initStore();

export default client;
