import React from 'react';
import { withRouter } from 'react-router-dom'; 

import ReactModal from 'react-modal';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      onLandingForm: true,
      onCreateForm: false, 
      onJoinForm: false,
      serverName: "",
      inviteLink: ""
    };

    this.closeServerForm = this.closeServerForm.bind(this);
    this.changeToServerForm = this.changeToServerForm.bind(this);
    this.changeToLandingForm = this.changeToLandingForm.bind(this);
    this.changeToJoinServerForm = this.changeToJoinServerForm.bind(this);

    this.handleChange = this.handleChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleJoin = this.handleJoin.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchSampleServers();
  }

  closeServerForm(event) {
    event.preventDefault();
    // if (event.currentTarget === event.target) {
      this.setState({onLandingForm: true, onCreateForm: false, onJoinForm: false });
      this.props.closeServerForm();
      this.props.clearServerErrors();
    // }
  }

  changeToServerForm(event) {
    // debugger;
    event.preventDefault();
    this.setState({onCreateForm:true, onLandingForm: false, onJoinForm: false });
    event.stopPropagation();
  }

  changeToLandingForm(event) {
    event.preventDefault();
    this.setState({onLandingForm: true, onCreateForm: false, onJoinForm: false });
    event.stopPropagation();
  }

  changeToJoinServerForm(event) {
    event.preventDefault();
    this.setState({onJoinForm: true, onCreateForm: false, onLandingForm: false});
    event.stopPropagation();
  }

  handleChange(type) {
    return event => this.setState({[type]: event.target.value});
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

  handleJoin(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('server[invite_link]', this.state.inviteLink);
    const { joinServer } = this.props;
    joinServer(formData).then(
      (newServer) => {
        this.props.history.push(`/servers/${newServer.server.id}`);
        this.props.closeServerForm();
        this.props.clearServerErrors();
        this.resetForm();
      }
    );
  }

  resetForm() {
    this.setState({
      onLandingForm: true,
      onCreateForm: false,
      onJoinForm: false,
      serverName: "",
      inviteLink: ""
    });
  }

  render() { 
    const errorsList = (
      <ul className="serverForm-errors">
        {this.props.errors.map((err,idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    const inviteLinks = (
      <ul className="sampleInviteLinks">
        {this.props.sampleInvites.map( (server, idx) => <li key={idx}>{server.invite_link}</li> ) }
      </ul>
    );

    // debugger;

    let currentFormPage; 
    if (this.state.onLandingForm) {
      currentFormPage = (
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

            <div className="serverForm-joinServer">
              <h4 className="joinServer-header">Join</h4>
              <p className="joinServer-body">Enter an instant invite and join your friend's server!</p>
              <div className="joinServer-icon"></div>
              <div className="joinServer-icon-attribute">Icons made by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              <button className="joinServer-submit" onClick={this.changeToJoinServerForm}>Join a server</button>
            </div>
          </section>
        </form>
      );
    } else if (this.state.onCreateForm) {
      currentFormPage = (
        <form className="serverForm-actual">
          <h5 className="serverForm-title">Create your server</h5>

          <p className="serverForm-caption">
            By creating a server, you will have access to free text chat to use amongst your friends.
        </p>

          <section className="serverForm-inputs">
            <div className="inputs-outerWrapper">
              <label className="inputs-label">Server Name</label>
              {errorsList}
              <input className="inputs-name" type="text" placeholder="Enter a server name" onChange={this.handleChange("serverName")} value={this.state.serverName} />
            </div>


            <section className="serverForm-buttons">
              <button className="backButton" onClick={this.changeToLandingForm}>Back</button>
              <button className="createButton" onClick={this.handleSubmit}>Create</button>
            </section>
          </section>

        </form>
      );
    } else {
      currentFormPage = (
        <form className="serverForm-actual">
          <h5 className="serverForm-title joinServer-actual-title">Join a server</h5>
          <p className="serverForm-caption">
            Enter an invite link to join an existing server.
            Here are some to get started!
          </p>
          {inviteLinks}

          <section className="serverForm-inputs">
            <div className="inputs-outerWrapper">
              <label className="inputs-label">Invite Code</label>
              {errorsList}
              <input className="inputs-name" type="text" placeholder="Enter an invite" onChange={this.handleChange("inviteLink")} value={this.state.inviteLink}/>
            </div>

            <section className="serverForm-buttons">
              <button className="backButton" onClick={this.changeToLandingForm}>Back</button>
              <button className="joinButton" onClick={this.handleJoin}>Join</button>
            </section>
          </section>
        </form>
      );
    }

    return (
      <ReactModal 
      isOpen={this.props.serverFormOpen}
      className="Modal"
      overlayClassName="Overlay"
      onRequestClose={this.closeServerForm}
      shouldCloseOnOverlayClick={true}
      >
        {currentFormPage}
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