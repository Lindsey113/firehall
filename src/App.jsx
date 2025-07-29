import './App.css';
import { LandingPage } from './components/layout/pages/landing';
import { PersonnelLandingPage } from './components/layout/pages/personnel';
import { pageWrapper } from './components/layout/PageWrapper';
import { AuthPageWrapper } from './components/layout/AuthPageWrapper';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { ProtectedRoute } from './components/layout/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: pageWrapper(<LandingPage />)
  },
  {
    path: '/authenticated',
    element:
      <ProtectedRoute>
        <AuthPageWrapper>
          <LandingPage />
        </AuthPageWrapper>
      </ProtectedRoute>
  },
  {
    path: '/personnel',
    element:
      <ProtectedRoute>
        <AuthPageWrapper>
          <PersonnelLandingPage />
        </AuthPageWrapper>
      </ProtectedRoute>

  }
])

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div style={{ color: 'white' }}>🔄 Checking login status...</div>;
  }

  return <RouterProvider router={router} />;
}

export default App;
