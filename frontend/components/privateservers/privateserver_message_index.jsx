import React from 'react';
import PrivateserverMessageIndexItemContainer from './privateserver_message_index_item_container';

class PrivateserverMessageIndex extends React.Component {
  constructor(props) {
    super(props);

    this.messagesEnd = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.messagesEnd.current) {
      this.messagesEnd.current.scrollIntoView({behavior: "auto" });
    }
  }

  render() {
    if (!this.props.privateserver) { return null; }

    const initialMessagesList = this.props.messages.map( message => <PrivateserverMessageIndexItemContainer message={message} privateserver={this.props.privateserver} key={message.id} /> );

    return (
      <section className="messagesWrapper">
        <div className="privateserver-welcomeMessage channel-welcomeMessage">
          <h1>This is the beginning of your direct message history with {this.props.privateserver.correspondent_username}.</h1>
        </div>

        {initialMessagesList}
        <div style={{ float: "left", clear: "both" }} ref={this.messagesEnd}>

        </div>
      </section>
    );
  }

}

export default PrivateserverMessageIndex;