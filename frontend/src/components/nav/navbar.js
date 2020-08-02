import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
import Logo from '../../assets/images/logo2.png'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="login-row">
                <div className="logout" onClick={this.logoutUser}><i class="fal fa-sign-out-alt"></i> Logout</div>
            </div>
        );
      } else {
        return (
            <div className="login-row">

              <Link to={'/login'}>Login</Link>
              <Link className="signup" to={'/signup'}>GET STARTED</Link>
      
              
            </div>
          
        );
      }
  }

  render() {
      return (
        <div className="navbar">
            <Link to="/"><img
          src={Logo}
      className='homeroom-logo' alt=""
    /></Link>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;