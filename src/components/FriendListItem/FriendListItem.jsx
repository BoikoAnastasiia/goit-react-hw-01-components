import styles from './FriendList.module.css';

const FriendListItem = ({ status, avatar, name }) => (
  <>
    <span class={styles.status} width="10px">
      {status}
    </span>
    <img class={styles.avatar} src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </>
);

export default FriendListItem;
