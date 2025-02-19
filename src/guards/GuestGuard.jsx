import { Navigate } from 'react-router-dom';
import authAPI from '../apis/modules/auth.api';
import { useEffect, useState } from 'react';

function GuestGuard({ element }) {
    const [isAuthenticated, setIsAuthentication] = useState(false)

    useEffect( () => {
        authAPI.checkValidToken()
        .then(response => {
            setIsAuthentication(true)
        })
    })

    return (
        <>
            { isAuthenticated ? (<Navigate to="/home" />) : (element) }
        </>
    );
}

export default GuestGuard;