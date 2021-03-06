import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleChange(type) {
    return event => this.setState({ [type]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formUser = new FormData();
    formUser.append('user[email]', this.state.email);
    formUser.append('user[password]', this.state.password);
    if (this.props.formType === 'signup') {
      formUser.append('user[username]', this.state.username);
    }

    this.props.processForm(formUser);
  }

  handleDemoSubmit(event) {
    event.preventDefault();
    const demoEmail = ["t", "e", "s", "t", "@", "g", "m", "a", "i", "l", ".", "c", "o", "m"];
    const demoPassword = ["t", "e", "s", "t", "i", "n", "g"];
    var userIndex = 0;
    var passwordIndex = 0;

    var interval = setInterval(() => {
      if (userIndex === demoEmail.length) {
        if (passwordIndex === demoPassword.length) {
          this.submitButton.click();
          clearInterval(interval);
        } else {
          this.setState(prevState => ({ password: prevState.password + demoPassword[passwordIndex] }));
          passwordIndex++;
        }
      } else {
        this.setState(prevState => ({ email: prevState.email + demoEmail[userIndex] }));
        userIndex++;
      }
    }, 100);
  }

  render() {
    const { errors, formType, processForm } = this.props;
    const formHeader = (formType === 'login') ? (
      <div className="authForm-header">
        <h3 className="marginBottom8">Welcome back!</h3>
        <p>We're so excited to see you again!</p>
      </div> 
    ) : (
      <div className="authForm-header">
        <h3>Create an account</h3>
      </div>
    );

    const errorsList = (
      <ul className="authForm-errors">
        {errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    const usernameLabel = (formType === 'signup') && (
      <div className="marginBottom20">
        <label className="authForm-label marginBottom8">Username</label>
        <input className="authForm-input" type="text" value={this.state.username} onChange={this.handleChange("username")} />
      </div>
    );
    
    const demoButton = (formType === 'login') && (
      <button onClick={this.handleDemoSubmit} >Demo Login</button>
    )
    const submitText = (formType === 'signup') ? "Continue" : "Login";
    
    const formFooter = (formType === 'login') ? (
      <div className="authForm-footer">
        <span className="authForm-needAccount">Need an account?</span>
        <Link to="/signup">Register</Link>
      </div>
    ) : (
      <div className="authForm-footer">
        <Link to="/login">Already have an account?</Link>
      </div>
    );

    // <Link to="/" className="session-div-logo marginBottom20">Convocord</Link>
    return (
      <div className="session-div">
        <Link className="splashHeader-logoContainer session-div-logo marginBottom20" to="/">
          <div className="splashHeader-logo"></div>
          <h1>Convocord</h1>
        </Link>
        <div className="authForm-box darkTheme">
          <form className="authForm">
            {formHeader}
            {errorsList}

            <div className="authForm-block marginTop20">
              <div className="marginBottom20">
                <label className="authForm-label marginBottom8">Email</label>
                <input className="authForm-input" type="text" value={this.state.email} onChange={this.handleChange("email")} />
              </div>

              {usernameLabel}

              <div className="marginBottom20">
                <label className="authForm-label marginBottom8">Password</label>
                <input className="authForm-input" type="password" value={this.state.password} onChange={this.handleChange("password")} />
              </div>

              <div className="authForm-buttonsContainer marginBottom8">
                <button onClick={this.handleSubmit} ref={input => this.submitButton = input}>{submitText}</button>
                {demoButton}
              </div>

              {formFooter}
            </div>

          </form>
        </div>
      </div>


    );
  }

}

export default SessionForm;