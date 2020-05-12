import React from 'react';
import Router from 'Components/Router';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from '../Styles/Theme.js';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles></GlobalStyles>
        <Router></Router>
      </>
    </ThemeProvider>
  );
}

export default App;
