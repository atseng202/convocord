import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      onLandingForm: true,
      serverName: ""
    }

    this.closeServerForm = this.closeServerForm.bind(this);
    this.changeToServerForm = this.changeToServerForm.bind(this);
    this.changeToLandingForm = this.changeToLandingForm.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  closeServerForm(event) {
    event.preventDefault();
    if (event.currentTarget === event.target) {
      this.props.closeServerForm();
    }
  }

  changeToServerForm(event) {
    // debugger;
    event.preventDefault();
    this.setState({onLandingForm: false })
    event.stopPropagation();
  }

  changeToLandingForm(event) {
    event.preventDefault();
    this.setState({onLandingForm: true })
    event.stopPropagation();
  }

  handleChange(event) {
    this.setState({serverName: event.target.value})
  }

  render() { 
    const serverFormPage = this.state.onLandingForm ? 
      (
      <form className="serverForm-landing">
        <header className="serverForm-header">Nice! Another server?</header>
        <section className="serverForm-actions">
          <div className="serverForm-createServer">
            <h4 className="createServer-header">Create</h4>
            <p className="createServer-body">Create a new server and invite your friends. It's free!</p>
            <div className="createServer-icon"></div>
            <div className="createServer-icon-attribute">Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <button className="createServer-submit" onClick={this.changeToServerForm}>Create a server</button>
          </div>
        </section>
      </form>
      ) : (
        <form className="serverForm-actual">
          <h5 className="serverForm-title">Create your server</h5>

          <p className="serverForm-caption">
            By creating a server, you will have access to free text chat to use amongst your friends.
          </p>

          <section className="serverForm-inputs">
            <div className="inputs-outerWrapper">
              <label className="inputs-label">Server Name</label>
              
              <input className="inputs-name" type="text" placeholder="Enter a server name" onChange={this.handleChange} value={this.state.serverName}/>
            </div>
    

            <section className="serverForm-buttons">
              <button className="backButton" onClick={this.changeToLandingForm}>Back</button>
              <button className="createButton">Create</button>
            </section>
          </section>

      
        </form>
      );

    return (
      <div className="modal-wrapper" onClick={this.closeServerForm}>
          <div className="serverForm-box">
            {serverFormPage}
          </div>
      </div>

    );
  }
}

export default ServerForm;