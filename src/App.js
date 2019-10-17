import React from 'react';
import './App.scss';
import NavigationView from "./navigation/NavigationView";
import NavigationBar from "./navigation/NavigationBar";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import logo from "./logo.svg";
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
const { store } = configureStore();

function App() {
  return (
      <Provider store={store}>
          <Router className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
              </header>
              <NavigationBar/>
              <NavigationView/>
          </Router>
      </Provider>
  );
}

export default App;
