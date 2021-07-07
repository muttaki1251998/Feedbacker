import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {

  renderContent() {
    switch(this.props.auth) {
      case null:
        return 'Still loading'
      case false:
        return <div><a href="/auth/google">Login with google</a></div>
      default:
        return [
        <li key="1"><Payments/></li>,
        <li key="2" style={{ margin: '0 10px' }}>
          Credits:{this.props.auth.credits}
        </li>,
        <li key="3"><a href="/api/logout">Logout</a></li>
      ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper #00897b teal darken-1 light">
          <Link 
          to='/'
          className="brand-logo">
            Feedbacker
           </Link>
          <ul id="nav-mobile" className="right">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(Header);