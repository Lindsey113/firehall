import { useAuth0 } from '@auth0/auth0-react';
import AuthHeader from '../layout/AuthHeader';
import { PersonnelLandingPage } from './pages/personnel';
import Footer from './Footer';
import React from 'react';

export const PersonnelPageWrapper = () => {
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return <div style={{ color: 'black' }}>⛔ Access denied. Please log in.</div>;
    }

    return (
        <>
            <AuthHeader />
            <PersonnelLandingPage />
            <Footer />
        </>
    );
};