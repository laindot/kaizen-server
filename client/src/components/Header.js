import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className='red lighten-2' href='/auth/google'>
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li>
            <Payments />
          </li>,
          <li>
            <a className='red lighten-2' href='/api/logout'>
              Logout
            </a>
          </li>,
        ];
    }
  }

  render() {
    return (
      <nav className='white'>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='brand-logo left'
          >
            <img
              src='logo.png'
              alt='Kaizen logo'
              className='responsive-image'
              style={{ height: 35 }}
            />
          </Link>
          <ul className='right'>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
