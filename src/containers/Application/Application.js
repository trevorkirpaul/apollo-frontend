import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Router from 'containers/Router';

import * as S from './styles';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => (
  <S.Application>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </S.Application>
);

export default App;
