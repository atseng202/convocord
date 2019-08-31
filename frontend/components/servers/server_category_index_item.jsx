import React from 'react';
import { Link } from 'react-router-dom';
import ChannelIndexItemContainer from '../channels/channel_index_item_container';

import ReactModal from 'react-modal';
import ChannelFormContainer from '../channels/channel_form_container';

class ServerCategoryIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showChannelModal: false
    }

    this.handleOpenChannelModal = this.handleOpenChannelModal.bind(this);
    this.handleCloseChannelModal = this.handleCloseChannelModal.bind(this);
  }

  handleOpenChannelModal() {
    this.setState({showChannelModal: true});
  }

  handleCloseChannelModal() {
    this.setState({showChannelModal: false});
    this.props.clearChannelErrors();
  }

  render() {
    const { server, category, channels } = this.props;
    return (
      <div className="serverDetail-categoryWrapper" key={category.id}>

        <div className="channels-rowContainer-header">
          <header className="channels-header">
            <span className="channels-header-name">{category.name}</span>
            <button className="channels-addButton" onClick={this.handleOpenChannelModal}>+</button>
          </header>
        </div>

        {channels.filter(possibleChannel => possibleChannel.category_id === category.id).map(channel =>
          <ChannelIndexItemContainer server={server} channel={channel} category={category} key={channel.id} />
        )}

        <ReactModal
        className='Modal darkModal'
        overlayClassName="Overlay"
        isOpen={this.state.showChannelModal}
        onRequestClose={this.handleCloseChannelModal}
        shouldCloseOnOverlayClick={true}
        >
          <ChannelFormContainer category={category} handleCloseChannelModal={this.handleCloseChannelModal}/>
        </ReactModal>
      </div>
    );
  }
} 

// const ServerCategoryIndexItem = ({server, category, channels}) => (
//   <div className="serverDetail-categoryWrapper" key={category.id}>

//     <div className="channels-rowContainer-header">
//       <header className="channels-header">
//         <span className="channels-header-name">{category.name}</span>
//         <button className="channels-addButton">+</button>
//       </header>
//     </div>

//     {channels.filter(possibleChannel => possibleChannel.category_id === category.id).map(channel =>
//       <ChannelIndexItemContainer server={server} channel={channel} category={category} key={channel.id}/>
//     )}

//   </div>
// );

export default ServerCategoryIndexItem;


// <div key={channel.id} className="channels-rowContainer">

//   <Link to={`/servers/${server.id}/categories/${category.id}/channels/${channel.id}`} className="channel-content">
//     <div className="channel-hashtag">#</div>
//     <span className="channel-name">{channel.name}</span>
//   </Link>

// </div>