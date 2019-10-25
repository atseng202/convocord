import React from 'react';
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
    const { server, category, channels, isModerator } = this.props;
    const addButton = isModerator ? <button className="channels-addButton" onClick={this.handleOpenChannelModal}>+</button> : null;
    return (
      <div className="serverDetail-categoryWrapper" key={category.id}>

        <div className="channels-rowContainer-header">
          <header className="channels-header">
            <span className="channels-header-name">{category.name}</span>
            {addButton}
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

export default ServerCategoryIndexItem;