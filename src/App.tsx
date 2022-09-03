import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import Box from '@shared/components/box/Box';
function App() {
  return (
    <Provider store={store}>
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Box />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </Provider>
  );
}

export default App;
