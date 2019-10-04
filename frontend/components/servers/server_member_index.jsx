import React from 'react';
import ServerMemberIndexItem from './server_member_index_item';
import ServerMemberIndexItemContainer from './server_member_index_item_container';

class ServerMemberIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { members, moderator } = this.props;

    const membersMap = (
      moderator && this.props.members.filter(potentialMember => potentialMember.id !== moderator.id).map(member => <ServerMemberIndexItemContainer key={member.id} member={member} />)
    );

    return (
      <section className="membersWrapper">
        <div className="membersScrollWrap">
          <div className="membersScroll">
            <div className="membersHeader">
              moderator - 1
            </div>
            <ServerMemberIndexItemContainer member={moderator} />

            <div className="membersHeader">
              members - {members.length - 1}
            </div>

            {membersMap}

          </div>
        </div>
      </section>
    );
  }

}

export default ServerMemberIndex;