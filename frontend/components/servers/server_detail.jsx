import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleServer(this.props.match.params.serverId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.requestSingleServer(this.props.match.params.serverId);
    }
  }

  render() {
    const { server } = this.props;
    const serverName = server && server.name;
    return (
      <div className="server-detail">
        <div className="serverDetailContainer">

          <section className="serverDetail-headerChild">
            <div className="serverDetail-headerContainer">
              <header className="serverDetail-header">
                <span className="serverDetail-header-name">{serverName}</span>
              </header>
            </div>
          </section>

          <section className="serverDetail-channelsContainer">
            <div className="serverDetail-channels">

              <div className="channels-rowContainer-header">
                <header className="channels-header">
                  <span className="channels-header-name">Text Channels</span>
                  <button className="channels-addButton">+</button>
                </header>
              </div>

              <div className="channels-rowContainer">
                <button className="channel-content">
                  <div className="channel-hashtag">#</div>
                  <span className="channel-name">general</span>
                </button>
              </div>
             
            </div>
          </section>

        </div>
      </div>
    )
  }
}

export default withRouter(ServerDetail);