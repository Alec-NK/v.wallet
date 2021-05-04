import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';

import Layout from './components/Layout';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>
    )
}

export default App

