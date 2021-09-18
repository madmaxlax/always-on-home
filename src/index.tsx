import 'react-app-polyfill/stable';
import 'whatwg-fetch';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/index.css';
import ScrollToTop from './components/ScrollToTop';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL || '/'}>
        <ScrollToTop />
        <Routes />
      </Router>
    </StyledEngineProvider>
  </ThemeProvider>,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
