import React from 'react';
// import ChannelMessageIndexItem from './channel_message_index_item';
import ChannelMessageIndexItemContainer from './channel_message_index_item_container';

class ChannelMessageIndex extends React.Component {
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
      this.messagesEnd.current.scrollIntoView({ behavior: "auto" });
    }
  }

  render() {
    if (!this.props.channel) { return null; }

    const initialMessagesList = this.props.messages.map( message => <ChannelMessageIndexItemContainer message={message} key={message.id}/>);

    return (
      <section className="messagesWrapper">
        <div className="channel-welcomeMessage">
          <h1>Welcome to the beginning of the <strong>#{this.props.channel.name}</strong> channel.</h1>
        </div>
        
        {initialMessagesList}
        <div style={{ float: "left", clear: "both" }} ref={this.messagesEnd}>
        
        </div>
      </section>
    );
  }
} 

export default ChannelMessageIndex;