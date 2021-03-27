import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ status, avatar, name }) => (
      <li key={name} class="item">
        <FriendListItem status={status} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

export default FriendList;
