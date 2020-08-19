/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
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

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
};

export default PrivateRoute;
