import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

import App from './components/App';
import reportWebVitals from './reportWebVitals'

const Theme = () => {

  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        primary: {
          main: '#649ed',
        },
        secondary: {
          main: '#c0c0c0',
        },
        type: isDarkMode ? 'dark' : 'light',
      }
    })
  }, [isDarkMode]);

  return theme
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#649ed',
    },
    secondary: {
      main: '#c0c0c0',
    },
    type: 'light',
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
