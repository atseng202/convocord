import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
            this.props.history.push(`/servers/${serverId}/categories/${firstCategory.id}/channels/${matchingChannel.id}`)
          }
        }
      }
    );
  }

  render() {
    if (this.props.match.params.serverId === "@me") { return null; }
    const { server, categories, channels } = this.props;
    const serverName = server && server.name;

    const categoriesSection = (
      <section className="serverDetail-channelsContainer">
        {categories.map((category, idx) => 
        <div className="serverDetail-categoryWrapper" key={category.id}>

          <div className="channels-rowContainer-header">
            <header className="channels-header">
              <span className="channels-header-name">{category.name}</span>
              <button className="channels-addButton">+</button>
            </header>
          </div> 

          {channels.filter( possibleChannel => possibleChannel.category_id === category.id).map( channel =>
            <div key={channel.id} className="channels-rowContainer">
              
              <Link to={`/servers/${server.id}/categories/${category.id}/channels/${channel.id}`} className="channel-content">
                <div className="channel-hashtag">#</div>
                <span className="channel-name">{channel.name}</span>
              </Link>
                
            </div>
          )}

        </div>
        )}

      </section>
      
    );

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

  
          {categoriesSection}


        </div>
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