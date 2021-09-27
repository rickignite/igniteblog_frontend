import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  //ApolloProvider,
  //useQuery,
  //gql
} from "@apollo/client";

const cache = new InMemoryCache();
const customFetch = (uri, options) => {
  return fetch(uri, options)
  .then(response => {
    if (response.status >= 500) {  // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  fetch: customFetch
});
const client = new ApolloClient({
  cache,
  link
});

export default client;