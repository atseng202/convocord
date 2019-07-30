import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = ({server, handleClick}) => {

  return (
  <li className="servers-li-wrapper" onContextMenu={handleClick}>
    <Link to={`/servers/${server.id}`} className="li-link-wrapper">
      <div className="acronym">{server.name.charAt(0)}</div>
    </Link>
  </li>  
  )
};

export default ServerIndexItem;