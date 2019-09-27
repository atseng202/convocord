import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const ServerIndexItem = ({server, handleClick}) => {

  return (
  <li className="servers-li-wrapper" onContextMenu={handleClick}>
    <NavLink to={`/servers/${server.id}`} className="li-link-wrapper" activeClassName="focusedServer">
      <div className="acronym">{server.name.charAt(0)}</div>
    </NavLink>
  </li>  
  )
};

export default ServerIndexItem;