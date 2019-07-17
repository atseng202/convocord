import React from 'react';
import ServerIndexContainer from '../servers/server_index_container';
import HomeIndex from './home_index';
import FriendIndex from '../friends/friend_index';

import ServerForm from '../servers/server_form';

class HomeMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-div">
        <section className="home-main">
          <ServerIndexContainer />
          <HomeIndex />
          <FriendIndex />
        </section>

        <ServerForm />
        <section id="overlay" className="overlay hidden"></section>
      </div>
    );
  }
}


export default HomeMain;