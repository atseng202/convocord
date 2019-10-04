import React from 'react';

class PrivateserverMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    e.preventDefault();
    const { privateserver } = this.props;
    if (e.keyCode === 13 && e.target.value.length > 0) {
      // TODO: - action cable message creation for DMs
      const message_socket = { content: e.target.value, messageable_id: privateserver.id, messageable_type: "Privateserver" };
      App[`room_channel_private-${privateserver.id}`].speak(message_socket);
      e.target.value = "";
    }
  }

  render() {
    return (
      <form className="privateserverMessageForm channelMessageForm">
        <div className="message-flex">
          <section className="messageAreaContainer">
            <div className="messageArea-inner">
              <textarea rows="1" placeholder="Message here" onKeyUp={this.handleKeyUp}></textarea>
            </div>
          </section>
        </div>
      </form>
    )
  }
}

export default PrivateserverMessageForm;