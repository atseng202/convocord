import React from 'react';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchServers();
  }

  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    );
  }
}

export default ServerIndex;