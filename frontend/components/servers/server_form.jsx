import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal-wrapper">
          <div className="serverForm-box expand">
              <form className="serverForm">
                <header className="serverForm-header">Nice! Another server?</header>
                <section className="serverForm-actions">
                  <div className="serverForm-createServer">
                    <h4 className="createServer-header">Create</h4>
                    <p className="createServer-body">Create a new server and invite your friends. It's free!</p>
                    <div className="createServer-icon"></div>
                    <div className="createServer-icon-attribute">Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    <button className="createServer-submit">Create a server</button>
                  </div>
                </section>
              </form>
          </div>
      </div>

    );
  }
}

export default ServerForm;