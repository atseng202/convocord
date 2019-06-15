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

  render() {
    const { errors, formType, processForm } = this.props;
    const formHeader = (formType === 'login') ? (
      <div className="sessionForm-header">
        <h3>Welcome back!</h3>
        <p>We're so excited to see you again!</p>
      </div> 
    ) : (
      <div className="sessionForm-header">
        <h3>Create an account</h3>
      </div>
    );

    const errorsList = (
      <ul className="sessionForm-errors">
        {errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    const usernameLabel = (formType === 'signup') && (
      <label>Username
      <input type="text" value={this.state.username} onChange={this.handleChange("username")}/>
      </label>
    );
    
    const demoButton = (formType === 'login') && (
      <button onClick={this.handleDemoSubmit}>Demo Login</button>
    )
    const submitText = (formType === 'signup') ? "Continue" : "Login";
    
    const formFooter = (formType === 'login') ? (
      <div className="sessionForm-footer">
        <span className="sessionForm-needAccount">Need an account?</span>
        <Link to="/signup">Register</Link>
      </div>
    ) : (
      <div className="sessionForm-footer">
        <Link to="/login">Already have an account?</Link>
      </div>
    );

    return (
      <form className="sessionForm">
        {formHeader}
        {errorsList}

        <label>Email
        <input type="text" value={this.state.email} onChange={this.handleChange("email")} />
        </label>

        {usernameLabel}

        <label>Password
        <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
        </label>

        <div className="sessionForm-buttonsContainer">
          <button onClick={this.handleSubmit}>{submitText}</button>
          {demoButton}
        </div>

        {formFooter}
      </form>
    );
  }

}

export default SessionForm;