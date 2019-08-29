import React from 'react';
import { withRouter } from 'react-router-dom'; 

import ReactModal from 'react-modal';

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
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  closeServerForm(event) {
    event.preventDefault();
    // if (event.currentTarget === event.target) {
      this.props.closeServerForm();
      this.props.clearServerErrors();
    // }
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

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('server[name]', this.state.serverName);

    const { createServer } = this.props;
    createServer(formData).then(
      (newServer) => {
        this.props.history.push(`/servers/${newServer.server.id}`);
        this.props.closeServerForm();
        this.props.clearServerErrors();
      } 
    );
  }

  render() { 
    const errorsList = (
      <ul className="serverForm-errors">
        {this.props.errors.map((err,idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

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
              {errorsList}
              <input className="inputs-name" type="text" placeholder="Enter a server name" onChange={this.handleChange} value={this.state.serverName}/>
            </div>
    

            <section className="serverForm-buttons">
              <button className="backButton" onClick={this.changeToLandingForm}>Back</button>
              <button className="createButton" onClick={this.handleSubmit}>Create</button>
            </section>
          </section>

      
        </form>
      );

    return (
      <ReactModal 
      isOpen={this.props.serverFormOpen}
      className="Modal"
      overlayClassName="Overlay"
      onRequestClose={this.closeServerForm}
      shouldCloseOnOverlayClick={true}
      >
        {serverFormPage}
      </ReactModal>

    );
  }
}

export default withRouter(ServerForm);

// <div className="modal-wrapper" onClick={this.closeServerForm}>
//     <div className="serverForm-box">
//       {serverFormPage}
//     </div>
// </div>