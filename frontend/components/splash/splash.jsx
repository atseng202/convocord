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
      <Link to ="/servers/@me" className="splash-button">Open Convocord</Link>
    ) : (
      <Link to="/signup" className="splash-button">Register for Convocord</Link>
    );

    const footerOpenButton = loggedIn ? (
      <Link to="/servers/@me" className="splash-button">Open Convocord</Link>
    ) : (
      <Link to="/signup" className="splash-button">Sign Up Now</Link>
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

        <footer className="splashFooter">
          <hr className="splashFooter-hrTop"></hr>
          <div className="splashFooter-content">
            <div className="splashFooter-slogan">
              <h2 className="splashFooter-h2">Ready to join Convocord? It's free!</h2>
              <h3 className="splashFooter-h3">Join people in checking out the app today!</h3>
            </div>
            {footerOpenButton}
          </div>
        </footer>
      </div>
    );

  }
}

export default Splash;