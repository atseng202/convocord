import React from 'react';
import ServerIndexContainer from '../servers/server_index_container';
import HomeIndex from './home_index';
import FriendIndex from '../friends/friend_index';

import ServerForm from '../servers/server_form';
import ServerFormContainer from '../servers/server_form_container';

import ServerDetailContainer from '../servers/server_detail_container';

import { Route } from 'react-router-dom';

class HomeMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // conditionally render ServerForm and overlay if addServer
    // pressed in ServerIndex
    const serverForm = this.props.serverFormOpen ? <ServerFormContainer /> : null;
    const overlay = this.props.serverFormOpen ? <section id="overlay" className="overlay"></section> : null;
    return (
      <div className="home-div">
        <section className="home-main">
          <Route path={["/servers/@me", "/servers/:serverId"]} component={ServerIndexContainer} />
          <Route exact path="/servers/:serverId" component={ServerDetailContainer} />
          <Route exact path="/servers/@me" component={HomeIndex} />
          <Route exact path="/servers/@me" component={FriendIndex} />

          
        </section>

        {overlay}
        {serverForm}
      </div>

    );
  }
}


export default HomeMain;

// Attempting to reorganize the way my servers component is rendered
// So that it isn't re-rendering from /servers/@me to /servers/:serverId...
/*
<div className="home-div">
  <section className="home-main" className={`home-main ${this.props.serverFormOpen ? "" : ""}`}>
    <ServerIndexContainer onClick={this.closeServerForm} />
    <HomeIndex />
    <FriendIndex />
    {overlay}
  </section>

  {serverForm}

</div>
*/