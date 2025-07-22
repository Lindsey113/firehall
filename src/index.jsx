import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const AUTH_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <Auth0Provider
      domain={AUTH_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin + '/authenticated',
      }}
    >
      <App />
    </Auth0Provider>
  
);