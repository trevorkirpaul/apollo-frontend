import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Posts from './queries/Posts'

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>Blogs</h1>
      <div>
        <Posts />
      </div>
    </div>
  </ApolloProvider>
)

export default App