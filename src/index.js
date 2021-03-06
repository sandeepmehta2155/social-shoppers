import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Routes } from 'react-router-dom'
import axios from 'axios'


axios.defaults.baseURL = 'https://tubbyturquoiseprocesses.sandeepmehta1.repl.co'
axios.defaults.headers.Authorization = localStorage.getItem('token')

ReactDOM.render(
  <Routes>
    <App />
  </Routes>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
