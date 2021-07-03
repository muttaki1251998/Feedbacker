import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';     
import { connect } from 'react-redux';
import { fetchUser } from '../action';          

import Header from './Header';
import Landing from './Landing';
import Survey from './Survey';
import Dashboard from './Dashboard';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return(
      <div className="container">
        <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" component={Survey} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);