import { useAuth0 } from '@auth0/auth0-react';
import AuthHeader from '../layout/AuthHeader';
import Footer from './Footer';
import React from 'react';

export const AuthPageWrapper = ({ children }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div style={{ color: 'black' }}>⛔ Access denied. Please log in.</div>;
  }

  return (
    <>
      <AuthHeader />
      {children}
      <Footer />
    </>
  );
};