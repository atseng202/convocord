import React from 'react';
import { Link } from 'react-router-dom';
import ChannelIndexItemContainer from '../channels/channel_index_item_container';

const ServerCategoryIndexItem = ({server, category, channels}) => (
  <div className="serverDetail-categoryWrapper" key={category.id}>

    <div className="channels-rowContainer-header">
      <header className="channels-header">
        <span className="channels-header-name">{category.name}</span>
        <button className="channels-addButton">+</button>
      </header>
    </div>

    {channels.filter(possibleChannel => possibleChannel.category_id === category.id).map(channel =>
      <ChannelIndexItemContainer server={server} channel={channel} category={category} key={channel.id}/>
    )}

  </div>
);

export default ServerCategoryIndexItem;


// <div key={channel.id} className="channels-rowContainer">

//   <Link to={`/servers/${server.id}/categories/${category.id}/channels/${channel.id}`} className="channel-content">
//     <div className="channel-hashtag">#</div>
//     <span className="channel-name">{channel.name}</span>
//   </Link>

// </div>