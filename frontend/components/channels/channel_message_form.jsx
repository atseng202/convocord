import React from 'react';

class ChannelMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e) {
    e.preventDefault();
    const { channel } = this.props;
    if (e.keyCode === 13 && e.target.value.length > 0) {
      const message_socket = { content: e.target.value, messageable_id: channel.id, messageable_type: "Channel" };
      // App.chat.speak(message_socket);
      // App.cable.subscriptions.subscriptions[0].speak(message_socket);
      App[`room_channel_public-${channel.id}`].speak(message_socket);
      e.target.value = "";
    }
  }

  render() {
    return (
      <form className="channelMessageForm">
        <div className="message-flex">
          <section className="messageAreaContainer">
            <div className="messageArea-inner">
              <textarea rows="1" placeholder="Message here" onKeyUp={this.handleKeyUp}></textarea>
            </div>
          </section>
        </div>
      </form>
    );
  }
}

export default ChannelMessageForm;