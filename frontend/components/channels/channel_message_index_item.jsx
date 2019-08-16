import React from 'react';

const ChannelMessageIndexItem = ({message, author}) => (
  <div className="messageIndexItemContainer">
    <header className="messageHeader">
      user: {author && author.username} on: {new Date(message.created_at).toTimeString()}
    </header>
    <p className="messageContent">
      message: {message.content}
    </p>
  </div>
);

export default ChannelMessageIndexItem;