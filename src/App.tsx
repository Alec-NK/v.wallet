import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
          <GlobalStyle />
          <Layout>
            <Dashboard />
          </Layout>
        </ThemeProvider>
    )
}

export default App

