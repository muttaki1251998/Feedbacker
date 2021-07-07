import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';     
import { connect } from 'react-redux';
import { fetchUser } from '../action';          

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './Surveys/SurveyNew';

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
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);