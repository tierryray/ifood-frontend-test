import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { StylesProvider, createMuiTheme } from '@material-ui/core/styles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './contexts/auth';

import Routes from './routes/routes';

const theme = createMuiTheme({
    typography: {
        'font-family': `"Montserrat", sans-serif`,
    },
    palette: {
        primary: {
            main: '#ea1d2c',
        },
    },
});

function App() {
    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>
                    <Routes />
                </AuthProvider>
                <ToastContainer position="top-right" autoClose={5000} />
            </ThemeProvider>
        </StylesProvider>
    );
}

export default App;
