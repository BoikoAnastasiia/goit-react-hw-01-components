import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './Friends.module.css';

const FriendList = ({ friends }) => (
  <ul class={styles.friendList}>
    {friends.map(({ isOnline, avatar, name }) => (
      <li key={name} class={styles.item}>
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

export default FriendList;
