import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, ...props }) => {
    const { signed, loading } = useAuth();

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <Route
            {...props}
            render={() =>
                signed ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;
