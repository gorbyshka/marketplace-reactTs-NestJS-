import React from 'react';

import ReactDOM from 'react-dom/client';

import { App } from './App';

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './redux/store/store';

import { AuthProvider } from './providers/AuthProvider';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(

  <React.StrictMode>

    <QueryClientProvider client={queryClient}>

      <Router>

        <Provider store={store}>
          
          <AuthProvider>

            <App />

          </AuthProvider>

        </Provider>

      </Router>

    </QueryClientProvider>

  </React.StrictMode>

);
