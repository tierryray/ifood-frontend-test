import React, { createContext, useState, useCallback } from 'react';

import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(() => {
        const accessToken = localStorage.getItem('@spotify:access_token');

        if (accessToken) {
            api.defaults.headers.authorization = `Bearer ${accessToken}`;
            setLoading(false);
            return accessToken;
        }

        return null;
    });

    const signIn = useCallback(async () => {
        const { hash } = window.location;
        const accessToken = hash.split('#access_token=')[1];

        if (!accessToken) return;

        localStorage.setItem('@spotify:access_token', accessToken);

        api.defaults.headers.authorization = `Bearer ${accessToken}`;

        setToken(accessToken);
    });

    const signOut = useCallback(() => {
        setLoading(true);
        localStorage.removeItem('@spotify:access_token');
        setToken(null);
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{ signed: token, signIn, signOut, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
