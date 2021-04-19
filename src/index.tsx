import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store_provider/store_provider';
import { RootStore } from './stores/root_store/root_store';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

const theme = {
  h4: "400 34px 'Montserrat', sans-serif",
  h5: "400 24px 'Montserrat', sans-serif",
  h6: "500 20px 'Montserrat', sans-serif",
  subtitle1: "400 16px 'Montserrat', sans-serif",
  subtitle2: "500 14px 'Montserrat', sans-serif",
  body1: "400 16px 'Open Sans', sans-serif",
  body2: "400 14px 'Open Sans', sans-serif",
  button: "600 14px 'Open Sans', sans-serif",
  titleLetterSpacing: "0.15em"
}


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider
      store={new RootStore()}
    >
      <Router>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
