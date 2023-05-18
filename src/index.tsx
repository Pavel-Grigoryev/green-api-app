import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { store } from './app/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00a884',
    },
    secondary: {
      main: '#f0f2f5',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ThemeProvider>
);
