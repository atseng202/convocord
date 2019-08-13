import React from 'react';
import { Link } from 'react-router-dom';
import ServerCategoryIndexItem from './server_category_index_item';

const ServerCategoryIndex = ({server, categories, channels}) => {
  return (
  <section className="serverDetail-channelsContainer">
    {categories.map( (category) => <ServerCategoryIndexItem server={server} category={category} channels={channels} key={category.id}/>)}
  </section>
  );
};

export default ServerCategoryIndex;