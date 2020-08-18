import React from 'react';
import { withRouter } from 'react-router-dom';
import "../nav/navbar.css"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      email2: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoStudentLogin = this.handleDemoStudentLogin.bind(this);
    this.handleDemoTeacherLogin = this.handleDemoTeacherLogin.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/dashboard');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  handleDemoStudentLogin() {

    let user
    user = {
      email: 's.altemose@yahoo.com',
      password: 'Password'
    }
    this.props.login(user); 
  }

  handleDemoTeacherLogin() {
 
    let user = {
      email: 'g.rakos@gmail.com',
      password: 'Password'
    };

    this.props.login(user); 

  }

  handleSubmit2(e) {
    e.preventDefault();

    let user = {
      email: this.state.email2,
      password: this.state.password2
    };

    this.props.login(user); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-row-2">
      <div className="login-container">
      <div className="student-login-title">Student Login</div>
      <div className="teacher-login-2">
        <form onSubmit={this.handleSubmit}>
          <div>
          
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input className="submit" type="submit" value="Login" /> 
            <div onClick={this.handleDemoStudentLogin} className="demo-login">Demo Student Login</div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
      
      </div>

      <div className="login-container-2">
      <div className="teacher-login-title">Teacher Login</div>
      <div className="teacher-login-2">
        <form onSubmit={this.handleSubmit2}>
          <div>
           
              <input
                className="email-input"
                type="text"
                value={this.state.email2}
                onChange={this.update('email2')}
                placeholder="Email"
              />
            <br/>
              <input
                className="email-input"
                type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Password"
              />
            <br/>
            <input className="submit-1" type="submit" value="Login" />
            
            {this.renderErrors()}
          </div>
        </form>
        <div onClick={this.handleDemoTeacherLogin} className="demo-login-1">Demo Teacher Login</div>
      </div>
      </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);