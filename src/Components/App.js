import React from 'react';
import Router from './Router';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles></GlobalStyles>
        <Router></Router>
      </>
    </ThemeProvider>
  );
}

export default App;
