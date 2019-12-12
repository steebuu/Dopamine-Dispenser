import React from "react";
import { Provider } from "react-redux";
import App from './App';
import AppContainer from './app_container';
import { HashRouter, Link, Route } from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <AppContainer/>
    </HashRouter>
  </Provider>
)

export default Root;