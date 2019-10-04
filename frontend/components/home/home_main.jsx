import React from 'react';
import ServerIndexContainer from '../servers/server_index_container';
import HomeIndexContainer from './home_index_container';
import FriendIndex from '../friends/friend_index';

import ServerFormContainer from '../servers/server_form_container';
import ServerDetailContainer from '../servers/server_detail_container';
import { Route } from 'react-router-dom';

class HomeMain extends React.Component {
  constructor(props) {
    super(props);

    this.closePopouts = this.closePopouts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPrivateservers();
    this.props.fetchSampleServers();
  }
  
  componentDidUpdate() {
    
  }

  closePopouts() {
    if (this.props.popoutOpen) { this.props.closeUserPopout(); }
  }

  render() {
    return (
      <div className="home-div">
        <section className="home-main" onClick={this.closePopouts}>
          <Route path={["/servers/@me", "/servers/:serverId"]} component={ServerIndexContainer} />
          <Route path="/servers/:serverId" component={ServerDetailContainer} />
          <Route path="/servers/@me" component={HomeIndexContainer} />
          {/* <Route exact path="/servers/@me" component={FriendIndex} /> */}
          
        </section>
        <ServerFormContainer />
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