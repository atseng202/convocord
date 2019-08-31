import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactModal from 'react-modal';


class ChannelForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channelName: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState( {channelName: e.target.value} );
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.handleCloseChannelModal();
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('channel[name]', this.state.channelName);
    formData.append('channel[category_id]', this.props.category.id)
    this.props.createChannel(formData).then(
      () => this.props.handleCloseChannelModal()
    );

    
  }

  render() {
    const errorsList = (
      <ul className="channelForm-errors">
        {this.props.errors.map((err, idx) => <li key={idx}>{err}</li>)}
      </ul>
    );

    return (
      <form className="channelForm">
        <header className="channelForm-header">
          <div className="channelForm-header-child">
            <h4>Create Text Channel</h4>
            <div className="channelForm-header-subtitle">in {this.props.category.name}</div>
          </div>
        </header>

        <section className="channelForm-name">
          <h5>Channel Name</h5>
          <div className="channelForm-inputWrapper">
            {errorsList}
            <input className="channelForm-nameInput" type="text" onChange={this.handleChange} value={this.state.channelName}/>
          </div>
        </section>

        <section className="channelForm-footer">
          <button className="channelForm-submit" type="submit" onClick={this.handleSubmit}>
            <div className="button-content">Create Channel</div>
          </button>
          <button className="channelForm-cancel" type="button" onClick={this.handleCancel}>
            <div className="button-content">Cancel</div>
          </button>
        </section>
      </form>
    )
  }
}

export default withRouter(ChannelForm);