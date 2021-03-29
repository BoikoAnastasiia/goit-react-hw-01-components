/* eslint-disable react/no-typos */
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import defaultPic from '../FriendList/default.svg';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </>
);
// ptsr

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Notification.defaultProps = {
  avatar: defaultPic,
  isOnline: false,
};

export default FriendListItem;
