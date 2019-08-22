import React from 'react';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChannelSelect = this.handleChannelSelect.bind(this);
  }

  handleChannelSelect(event) {
    const { hoverServerChannel, channel } = this.props;
    hoverServerChannel(channel.id);
  }

  render() {
    const { server, channel, category, isSelected, hoverServerChannel } = this.props;
    return (
      <div key={channel.id} className="channels-rowContainer">

        <Link 
          to={`/servers/${server.id}/categories/${category.id}/channels/${channel.id}`} className={isSelected ? "channel-content channel-hovered" : "channel-content"}
          onClick={this.handleChannelSelect}
        >
          <div className="channel-hashtag">#</div>
          <span className="channel-name">{channel.name}</span>
        </Link>

      </div>
    )
  }
}

export default ChannelIndexItem;