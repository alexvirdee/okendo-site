import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

import ReviewStep from './steps/review/review.component';
import RatingsStep from './steps/ratings/ratings.component';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <Redirect to="/review" />
            )
          }} />
          <Route exact path="/review" component={ReviewStep} />
          <Route exact path="/ratings" component={RatingsStep} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
