import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <Header />
        <h1>Okendo Review Form</h1>
      </div>
    );
  }
}

export default App;
