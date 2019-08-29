import React from 'react';
import ServerMemberIndexItem from './server_member_index_item';

class ServerMemberIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { members, moderator } = this.props;
    // debugger;
    const membersMap = (
      moderator && this.props.members.filter(potentialMember => potentialMember.id !== moderator.id).map(member => <ServerMemberIndexItem key={member.id} member={member} />)
    );

    // debugger;
    return (
      <section className="membersWrapper">
        <div className="membersScrollWrap">
          <div className="membersScroll">
            <div className="membersHeader">
              moderator - 1
            </div>
            <ServerMemberIndexItem member={moderator} />

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