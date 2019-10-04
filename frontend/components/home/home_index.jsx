import React from 'react';
import FriendIndex from '../friends/friend_index';
import { Link, Route, NavLink } from 'react-router-dom';
import PrivateserverIndexItem from '../privateservers/privateserver_index_item';
import PrivateserverDetailContainer from '../privateservers/privateserver_detail_container';

class HomeIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("Home index mounted");
    this.props.fetchPrivateservers();
  }
  
  render() {
    const { removePrivateserver, privateserverIds } = this.props;
    const privateserversMap = this.props.privateservers.map( (privateserver) => <PrivateserverIndexItem key={privateserver.id} privateserver={privateserver} removePrivateserver={removePrivateserver} privateserverIds={privateserverIds}/>);

    return (
      <div className="home-detail server-detail">
        <div className="homeDetailContainer serverDetailContainer">
          <section className="homeDetail-headerChild serverDetail-headerChild">
            <div className="home-headerContainer serverDetail-headerContainer">
              <header className="home-header serverDetail-header"></header>
            </div>
          </section>

          <section className="homeDetail-messagesContainer serverDetail-channelsContainer">
            <div className="friendsContainer">
              <NavLink exact to="/servers/@me" className="normalState" activeClassName="focusedContainer">
                <svg className="friendIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" /></svg>
                <span className="channel-name">Friends</span>
              </NavLink>
            </div>

            <header>Direct Messages</header>
            {privateserversMap}
          </section>

        </div>

        <Route exact path="/servers/@me" component={FriendIndex} />
        <Route exact path="/servers/@me/:privateserverId" component={PrivateserverDetailContainer} />
      </div>
    );
  }
} 
export default HomeIndex;