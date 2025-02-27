import { Navigate } from 'react-router-dom';

function AuthGuard({ element }) {
    const isAuthenticated = localStorage.getItem('authToken');

    return (
        <>
            { isAuthenticated != "" ? (element) : (<Navigate to="/" />) }
        </>
    );
}

export default AuthGuard;