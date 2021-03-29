import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './Friends.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ isOnline, avatar, name }) => (
      <li key={name} className={styles.item}>
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

export default FriendList;
