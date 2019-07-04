import React from 'react';
import SplashHeaderContainer from './splash_header_container';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loggedIn } = this.props;
    const openButton = loggedIn ? (
      <Link to ="/servers/@me" className="splashBody-button">Open Convocord</Link>
    ) : (
      <Link to="/signup" className="splashBody-button">Register for Convocord</Link>
    );

    return (
      <div className="splash-div">
        <SplashHeaderContainer />
        
        <section className="splashBody">
          <div className="splashBody-content">
            <h1 className="splashBody-h1">It's time to ditch other chat apps (or not)</h1>
            <p className="splashBody-p">
              All-in-one text chat for programmers that's free, secure, and responsive on the browser.
              A platform inspired by Discord. Simplify your life.
            </p>

            {openButton}
          </div>

          <div className="splashBody-img">

          </div>
        </section>
      </div>
    );

  }
}

export default Splash;