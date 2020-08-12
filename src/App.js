import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';

// import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />

      <Container maxWidth="sm">
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
