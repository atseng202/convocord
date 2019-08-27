export const moderator = (state, ownProps) => {
  const server = state.entities.servers[ownProps.match.params.serverId];
  return server && server.moderator_id && state.entities.users[server.moderator_id]
};
