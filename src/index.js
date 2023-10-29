import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App_props from './App_props';
import Registration from './Registration';
import Topbar from './components/Topbar';
import ApiCalls from './components/ApiCalls';
import ApiUsers from './components/ApiUsers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topbar />
    {/* <App /> */}
    {/* <App_props ></App_props> */}
    <Registration />
    <ApiCalls />
    <ApiUsers />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
