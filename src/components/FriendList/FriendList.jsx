import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './Friends.module.css';

const FriendList = ({ friends }) => (
  <ul class={styles.friendList}>
    {friends.map(({ status, avatar, name }) => (
      <li key={name} class={styles.item}>
        <FriendListItem status={status} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

export default FriendList;
