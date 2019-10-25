import React from 'react';
import { Link } from 'react-router-dom';

/* 
  Need to style the header logo, decided to download a PNG of Discord
  am planning to make a scss page now for styling the header
*/
const SplashHeader = ({loggedIn}) => {
  const headerButton = loggedIn ? (
    <Link to="/servers/@me" className="splashHeader-button">Open</Link>
  ) : (
    <Link to="/login" className="splashHeader-button">Login</Link>
  );

  return (
    <header className="splashHeader desktopHeader">
      <nav className="splashHeader-inner">
        
        <Link className="splashHeader-logoContainer" to="/">
          <div className="splashHeader-logo"></div>
          <h1>Convocord</h1>
        </Link>
        
        <ul className="splashHeader-rightNav">
          <li className="splashHeader-li splashHeader-liInactive">
            <a className="splashHeader-navLink" href="https://github.com/atseng202/convocord">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li className="splashHeader-li splashHeader-liInactive">
            <a className="splashHeader-navLink" href="https://linkedin.com/asdfasdf">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>          
          </li>
          <li className="splashHeader-li splashHeader-liInactive">
            {headerButton}
          </li>
        </ul>
      </nav>
    </header>

  );
};

export default SplashHeader;