import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { AuthProvider } from './contexts/auth';

import Routes from './routes/routes';

const theme = createMuiTheme({});

/**
 * TODO:
 * 1 - Consumir api de filtros e exibir eles dinamicamente
 * 2 - Montar Grid com lista das playlists e o card pra cada playlist
 * 3 - Funcionamento do searchbar
 * 5 - Layout! Capriche no negócio
 * 6 (opcional) - Expiração do token
 * OBS: considere usar o useMemo: https://medium.com/reactbrasil/react-usememo-na-pr%C3%A1tica-692110771c01
 */

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
