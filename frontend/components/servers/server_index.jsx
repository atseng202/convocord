import React from 'react';
import { Link } from 'react-router-dom';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);

    this.openServerForm = this.openServerForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchServers();
  }

  openServerForm(event) {
    event.preventDefault();
    this.props.openServerForm();
  }

  handleClick(event) {
    event.preventDefault();
    // TODO: - Add a context menu for quick server settings
  }

  render() {
    const { servers } = this.props;
    const homeListItem = (
      <li className="servers-li-wrapper">
        <Link to="/servers/@me" className="li-link-wrapper homeButton">
   
          <span className="tooltip">
            <span>Home</span>
          </span>


          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </Link>
      </li>
    );

    const addServerItem = (
      <li className="servers-li-wrapper" onClick={this.openServerForm}>
        <button className="li-link-wrapper addButton" aria-label="Add a Server">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="false">
            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </button>

      </li>
    );

    return (
      <div className="servers-wrapper">
        <div className="servers-scrolling-wrap">

          <ul className="servers-ul-scrollable">
            {homeListItem}

            <li className="servers-li-wrapper">
              <div className="homeButton-hr" />
            </li>

            {servers.map(server => <ServerIndexItem key={server.id} server={server} handleClick={this.handleClick} />)}

            {addServerItem}
          </ul>

        </div>
      </div>
    );
  }
}

export default ServerIndex;