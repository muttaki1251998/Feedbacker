import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {

  render() {

    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }

    return(
      <div className="container" style={style}>
        <div >
          <h2>Welcome to Feedbacker!</h2>
          <p>Here you can create a survey and send it to people.</p>
          <div ><a className="waves-effect waves-light btn" href="/auth/google">Join us</a></div>
        </div>
      </div>
    );
  }
}

export default Landing;

