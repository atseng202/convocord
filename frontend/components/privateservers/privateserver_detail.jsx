import React from 'react';
import PrivateserverMessageIndex from './privateserver_message_index';
import PrivateserverMessageForm from './privateserver_message_form';

class PrivateserverDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestSinglePrivateserver, match, receiveMessage } = this.props;

    requestSinglePrivateserver(match.params.privateserverId).then(
      (privateserver) => {

        App[`room_channel_private-${privateserver.privateserver.id}`] = App.cable.subscriptions.create({channel: "RoomChannel", privateserver_id: privateserver.privateserver.id}, {
          connected: function () { },
          disconnected: function () { App.cable.subscriptions.remove(this); },
          received: function (data) {
            if (data['message']['messageable_type'] === 'Privateserver' && data['message']['messageable_id'] === privateserver.privateserver.id) {
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
    const { requestSinglePrivateserver, match, receiveMessage } = this.props;
    if (match.params.privateserverId !== prevProps.match.params.privateserverId) {
      if (App[`room_channel_private-${prevProps.match.params.privateserverId}`]) {
        App[`room_channel_private-${prevProps.match.params.privateserverId}`].disconnected();
      }

      requestSinglePrivateserver(match.params.privateserverId).then(
        (privateserver) => {
          App[`room_channel_private-${privateserver.privateserver.id}`] = App.cable.subscriptions.create({ channel: "RoomChannel", privateserver_id: privateserver.privateserver.id }, {
            connected: function () { },
            disconnected: function () { App.cable.subscriptions.remove(this); },
            received: function (data) {
              if (data['message']['messageable_type'] === 'Privateserver' && data['message']['messageable_id'] === privateserver.privateserver.id) {
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

  render() {
    const { privateserver, messages } = this.props;
    if (!privateserver) { return null; }
    return (
      <div className="privateserverDetailContainer channelDetailContainer">
        <div className="privateserverDetailHeaderContainer channelDetailHeaderContainer">
          <header className="privateserverDetailHeader channelDetailHeader">
            <div className="privateserver-@ channel-hashtag">@</div>
            <span className="privateserver-username channel-name">{privateserver.correspondent_username}</span>
          </header>
        </div>

        <div className="privateserver-contentwrapper channel-contentWrapper">
          <div className="privateserverDetail-messaging channelDetail-messaging">
            <PrivateserverMessageIndex privateserver={privateserver} messages={messages} />
            <PrivateserverMessageForm privateserver={privateserver}/>
          </div>
        </div>
      </div>
    );
  }
}

export default PrivateserverDetail;