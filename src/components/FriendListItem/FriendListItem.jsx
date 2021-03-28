/* eslint-disable react/no-typos */
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import defaultPic from '../FriendList/default.svg';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span class={isOnline ? styles.isOnline : styles.isOffline}></span>
    <img class={styles.avatar} src={avatar} alt={name} width="48" />
    <p class="name">{name}</p>
  </>
);
// ptsr

FriendListItem.propTypes = {
  isOnline: PropTypes.oneOf(['isOffline', 'isOnline']),
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  avatar: defaultPic,
  isOnline: false,
};

export default FriendListItem;
