import React from 'react';
import { closeUserPopout } from '../../actions/member_ui_actions';

class ServerMemberPopout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  preventPropagation(e) {
    e.stopPropagation();
  }

  handleChange(e) {
    this.setState({content: e.target.value});
  }

  handleKeyUp(e) {
    e.preventDefault();

    const { member, createMessage, authorId, closeUserPopout } = this.props;

    if (e.keyCode === 13 && e.target.value.length > 0) {
      const formData = new FormData();
      formData.append('message[author_id]', authorId);  
      formData.append('message[content]', this.state.content);
      formData.append('recipient_id', member.id);
      
      createMessage(formData).then(
        newMessage => {
          this.props.history.push(`/servers/@me/${newMessage.messageable_id}`);
          closeUserPopout();
        }
      );
    }
  }

  render() {
    if (!this.props.popoutOpen) { return null; }

    const { member, authorId } = this.props;

    const messageForm = (
      (member.id !== authorId) ?
      <form className="userPopout-messageForm" onKeyUp={this.handleKeyUp}>
        <input className="userPopout-quickMessage" placeholder={`Message @${member.username}`} onChange={this.handleChange} value={this.state.content} />
      </form> : null
     );
    
    return (
      <div className="popout-wrapper" onClick={this.stopPropagation}>
        <div className="popout">
          <div className="userPopout">
            <header className="userPopout-header">
              <div className="userPopout-header-flex">

                <div className="userAvatarBig-wrapper">
                  <div className="userAvatarBig-wrapper-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M24 11.8c2.32 0 4.2 1.88 4.2 4.2s-1.88 4.2-4.2 4.2-4.2-1.88-4.2-4.2 1.88-4.2 4.2-4.2m0 18c5.95 0 12.2 2.91 12.2 4.2v2.2H11.8V34c0-1.29 6.25-4.2 12.2-4.2M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 18c-5.33 0-16 2.67-16 8v6h32v-6c0-5.33-10.67-8-16-8z" /></svg>
                  </div>
                </div>

                <div className="userPopout-header-text">
                  <span className="userPopout-headerName">
                    {member.username}
                  </span>
                </div>
              </div>
            </header>

            {messageForm}
          </div>
        </div>
      </div>
    );
  }
}

export default ServerMemberPopout;