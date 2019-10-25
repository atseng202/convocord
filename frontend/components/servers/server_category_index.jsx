import React from 'react';
import ServerCategoryIndexItem from './server_category_index_item';

const ServerCategoryIndex = ({server, categories, channels, clearChannelErrors, userId}) => {
  return (
  <section className="serverDetail-channelsContainer">
    {categories.map( (category) => <ServerCategoryIndexItem server={server} category={category} channels={channels} clearChannelErrors={clearChannelErrors} key={category.id} isModerator={server.moderator_id === userId}/>)}
  </section>
  );
};

export default ServerCategoryIndex;