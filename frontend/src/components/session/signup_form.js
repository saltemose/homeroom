import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      first_name2: '',
      last_name: '',
      last_name2: '',
      classes: [],
      email: '',
      email2: '',
      password: '',
      password2: '',
      password3: '',
      password4: '',
      type: '',
      errors: {},
      errors2: {},
      studentNext: 'no',
      teacherNext: 'no',

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.clearedErrors = false;
    this.updateClasses = this.updateClasses.bind(this);
    this.renderStudentNext = this.renderStudentNext.bind(this);
    this.renderTeacherNext = this.renderTeacherNext.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors})
    this.setState({errors2: nextProps.errors2})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateClasses(subject) {
    this.state.classes.push(subject)
  }

  handleSubmit(e) {
    if (this.state.studentNext === 'yes' && this.state.password2) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      type: "Student",
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history); } 
    else 
      this.setState({studentNext: 'yes'})
 
  }

  handleSubmit2(e) {
    if (this.state.teacherNext === 'yes' && this.state.password4) {
    e.preventDefault();
    let user = {
      email: this.state.email2,
      first_name: this.state.first_name2,
      last_name: this.state.last_name2,
      type: "Teacher",
      classes: ["Bio101", "APBio", "Bio300", "Bio200"],
      password: this.state.password3,
      password2: this.state.password4,
    };

    this.props.signup(user, this.props.history); } 
    else 
      this.setState({teacherNext: 'yes'})
 
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


  renderErrors2() {
    return(
      <ul>
        {Object.keys(this.state.errors2).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors2[error]}
          </li>
        ))}
      </ul>
    );
  }

  renderStudentNext() {
    if (this.state.studentNext === 'no')
     this.setState({studentNext: 'yes'}) 
     else this.setState({studentNext: 'no'})
  }

  renderTeacherNext() {
    if (this.state.teacherNext === 'no')
    this.setState({teacherNext: 'yes'}) 
    else this.setState({teacherNext: 'no'})
  }

  render() {
    return (
        <div className="login-row-2">
      <div className="login-container">
      <div className="student-login-title">Student Sign Up</div>
      <div className="teacher-login-2">
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <div className={this.state.studentNext === 'no' ? "submit-inputs" : "hidden"}>
          <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                placeholder="First Name"
              />
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                placeholder="Last Name"
              />
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/> <br/>
            <div onClick={this.renderStudentNext} className="next-btn">Next</div>
            </div>
            <div className={this.state.studentNext === 'yes' ? "next-submit-inputs" : "hidden"}>
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>
            <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Enter your password again"
              />
              <br/>
            <input className="submit" type="submit" value="Sign Up" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
      </div>

      <div className="login-container-2">
      <div className="teacher-login-title">Teacher Sign Up</div>
      <div className="teacher-login-2">
        <form onSubmit={this.handleSubmit2}>
          <div className="signup-form">
            <div className={this.state.teacherNext === 'no' ? "submit-inputs" : "hidden"}>
          <input className="email-input" type="text"
                value={this.state.first_name2}
                onChange={this.update('first_name2')}
                placeholder="First Name"
              />
              <input className="email-input" type="text"
                value={this.state.last_name2}
                onChange={this.update('last_name2')}
                placeholder="Last Name"
              />
            <br/>
              <input className="email-input" type="text"
                value={this.state.email2}
                onChange={this.update('email2')}
                placeholder="Email"
              />
            <br/> <br/>
            <div onClick={this.renderTeacherNext} className="next-btn">Next</div>
            </div>
            <div className={this.state.teacherNext === 'yes' ? "next-submit-inputs" : "hidden"}>
              <input className="email-input"  type="password"
                value={this.state.password3}
                onChange={this.update('password3')}
                placeholder="Password"
              />
            <br/>
            <input className="email-input"  type="password"
                value={this.state.password4}
                onChange={this.update('password4')}
                placeholder="Enter your password again"
              />
              <br/>
            <input className="submit" type="submit" value="Sign Up" />
            </div>
            {this.renderErrors()}
          </div>
        </form>
      </div>
      </div>
</div>
    
    );
  }
}

export default withRouter(SignupForm);