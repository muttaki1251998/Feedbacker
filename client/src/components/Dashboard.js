import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './Surveys/SurveyList';

class Dashboard extends React.Component {

  render() {
    const style = {
      paddingTop: '20px',
      paddingBottom: '20px',
      textAlign: 'center'
    }
    return(
      <div>
        <div style={style}>
        <Link className="waves-effect waves-light btn">CREATE SURVEY</Link>
        </div>        
        <SurveyList />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large teal">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;