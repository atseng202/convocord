import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelMessageIndex from './channel_message_index';
import ChannelMessageForm from './channel_message_form';

import ServerMemberIndexContainer from '../servers/server_member_index_container';

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestSingleChannel, match, receiveMessage } = this.props;
    requestSingleChannel(match.params.channelId).then(
      (channel) => {
        App[`room_channel-${channel.channel.id}`] = App.cable.subscriptions.create({channel: "RoomChannel", channel_id: channel.channel.id}, {
          connected: function () { },
          disconnected: function () { App.cable.subscriptions.remove(this); },
          received: function (data) {
            if (data['message']['messageable_type'] === 'Channel' && data['message']['messageable_id'] === channel.channel.id) {
              receiveMessage(data['message']);
            }
          },
          speak: function (message) {
            return this.perform('speak', {
              message: message
            });
          }
        });
      }
    );
  }

  componentDidUpdate(prevProps) {
    const { requestSingleChannel, match, receiveMessage } = this.props;
    if (match.params.channelId !== prevProps.match.params.channelId) {
      if (App[`room_channel-${prevProps.match.params.channelId}`]) {
        App[`room_channel-${prevProps.match.params.channelId}`].disconnected();
      }
  
      requestSingleChannel(match.params.channelId).then(
        (channel) => {
          App[`room_channel-${channel.channel.id}`] = App.cable.subscriptions.create({ channel: "RoomChannel", channel_id: channel.channel.id }, {
            connected: function () { },
            disconnected: function () { App.cable.subscriptions.remove(this); },
            received: function (data) {
              if (data['message']['messageable_type'] === 'Channel' && data['message']['messageable_id'] === channel.channel.id) {
                receiveMessage(data['message']);
              }
            },
            speak: function (message) {
              return this.perform('speak', {
                message: message
              });
            }
          });
        }
      );
    }
  }
  
  componentWillUnmount() {
    App.cable.subscriptions.subscriptions[0].disconnected();
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
        <div className="channel-contentWrapper">
          <div className="channelDetail-messaging">
            <ChannelMessageIndex channel={channel} messages={messages} />
            <ChannelMessageForm channel={channel} />
          </div>
          <ServerMemberIndexContainer />
        </div>
      </div>
    )
  }
}

export default withRouter(ChannelDetail);

/* <section className="channelDetail-content">
          <ChannelMessageIndex channel={channel} messages={messages} />
          <ServerMemberIndexContainer />
        </section>
        
        <ChannelMessageForm channel={channel}/> */