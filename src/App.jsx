import './App.css';
import { LandingPage } from './components/layout/pages/landing';
import { AuthPage } from './components/layout/pages/authenticated';
import { PersonnelLandingPage } from './components/layout/pages/personnel';
import { pageWrapper } from './components/layout/PageWrapper';
import { AuthPageWrapper } from './components/layout/AuthPageWrapper';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { PersonnelPageWrapper } from './components/layout/PersonnelPageWrapper';




function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div style={{ color: 'white' }}>🔄 Checking login status...</div>;
  }

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
            <AuthPage />
          </AuthPageWrapper>
        </ProtectedRoute>
    },
    {
      path: '/personnel',
      element:
        <ProtectedRoute>
          <PersonnelPageWrapper>
            <PersonnelLandingPage />
          </PersonnelPageWrapper>
        </ProtectedRoute>

    }
  ])

  return <RouterProvider router={router} />;
}

export default App;