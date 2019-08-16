import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelMessageIndex from './channel_message_index';

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestSingleChannel, match } = this.props;
    requestSingleChannel(match.params.channelId);
  }

  render() {
    const { channel ,messages } = this.props;

    const channelDetailHeader = channel && (
      <div className="channelDetailHeaderContainer">

        <header className="channelDetailHeader">
          <div className="channel-hashtag">#</div>
          <span className="channel-name">{channel.name}</span>
        </header>
      </div>
    );

    return (
      <div className="channelDetailContainer">
        {channelDetailHeader}
        <ChannelMessageIndex channel={channel} messages={messages}/>
      </div>
    )
  }
}

export default withRouter(ChannelDetail);