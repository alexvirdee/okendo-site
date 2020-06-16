import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

import ReviewStep from './steps/review/review.component';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ReviewStep} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
