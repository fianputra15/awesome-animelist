import React from 'react';
import ReactDOM from 'react-dom/client';
import 'material-icons';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import client from './services/animService';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  // <React.StrictMode>
  //   <ApolloProvider client={client}>
  //     <App />
  //   </ApolloProvider>
  // </React.StrictMode>,
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
