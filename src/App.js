import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { AuthProvider } from './contexts/auth';

import Routes from './routes/routes';

// import theme from './styles/theme';

//  TODO: use o Router, crie um dumb component que pegue o token e sete no localStorage, e redirecione o usuário para a Home Page

function App() {
    return (
        <ThemeProvider>
            <CssBaseline />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
