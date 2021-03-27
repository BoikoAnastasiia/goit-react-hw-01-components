const FriendListItem = ({ status, avatar, name }) => (
  <>
    <span class="status">{status}</span>
    <img class="avatar" src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </>
);

export default FriendListItem;
