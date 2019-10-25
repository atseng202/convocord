import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelDetailContainer from '../channels/channel_detail_container';

import ServerCategoryIndexContainer from './server_category_index_container';
import { ProtectedRoute } from '../../util/route_util';

class ServerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.fetchServerInfo = this.fetchServerInfo.bind(this);
  }

  componentDidMount() {
    // this.props.requestSingleServer(this.props.match.params.serverId);
    if (this.props.match.params.serverId !== "@me") {
      this.fetchServerInfo(this.props.match.params.serverId);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId && this.props.match.params.serverId !== "@me") {
      // this.props.requestSingleServer(this.props.match.params.serverId);
      this.fetchServerInfo(this.props.match.params.serverId);
    }
    else if (
      (this.props.match.params.serverId !== "@me") && 
      (prevProps.location.pathname !== this.props.location.pathname) && 
      (prevProps.match.params.serverId === this.props.match.params.serverId) && 
      (prevProps.location.pathname.includes("channels")) &&
      (!this.props.location.pathname.includes("channels"))
      ) {
      // server id is still the same, but we have clicked a server link which does not have the full path to a channel
      this.props.history.goBack();
    } 
  }

  fetchServerInfo(serverId) {
    this.props.requestSingleServer(serverId).then(
      updatedServer => {
        const categories = Object.values((updatedServer.categories ? updatedServer.categories : {}));
        const channels = Object.values((updatedServer.channels ? updatedServer.channels : {}));

        if (categories.length > 0) {
          const firstCategory = categories[0];
          if (channels.length > 0) {
            const matchingChannel = channels.find(channel => channel.category_id === firstCategory.id);
            this.props.history.push(`/servers/${serverId}/categories/${firstCategory.id}/channels/${matchingChannel.id}`);
            // also update ui for channel selected
            this.props.hoverServerChannel(matchingChannel.id);
          }
        }
      }
    );
  }

  render() {
    if (this.props.match.params.serverId === "@me") { return null; }
    const { server, categories, channels } = this.props;
    const serverName = server && server.name;

    return (
      <div className="server-detail">
        <div className="serverDetailContainer">

          <section className="serverDetail-headerChild">
            <div className="serverDetail-headerContainer">
              <header className="serverDetail-header">
                <span className="serverDetail-header-name">{serverName}</span>
              </header>
            </div>
          </section>

          <ServerCategoryIndexContainer server={server} categories={categories} channels={channels}/>
          
        </div>

        <ProtectedRoute exact path="/servers/:serverId/categories/:categoryId/channels/:channelId" component={ChannelDetailContainer} />

      </div>
    )
  }
}

export default withRouter(ServerDetail);

/*
<div className="serverDetail-channels">

  <div className="channels-rowContainer-header">
    <header className="channels-header">
      <span className="channels-header-name">Text Channels</span>
      <button className="channels-addButton">+</button>
    </header>
  </div>

  <div className="channels-rowContainer">
    <button className="channel-content">
      <div className="channel-hashtag">#</div>
      <span className="channel-name">general</span>
    </button>
  </div>

</div>
*/

// Replacing serverDetail-categoriesSection with just channelsContainer
/*
<div className="serverDetail-categoriesSection">
*/