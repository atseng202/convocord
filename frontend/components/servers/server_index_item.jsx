import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = ({server}) => (
  <li className="servers-li-wrapper">
    <Link to={`/servers/${server.id}`} className="li-link-wrapper">
      <div className="acronym">{server.name.charAt(0)}</div>
    </Link>
  </li>  
);

export default ServerIndexItem;