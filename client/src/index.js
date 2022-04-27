import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Pages />
  </React.StrictMode>,
  document.getElementById('root')
);
