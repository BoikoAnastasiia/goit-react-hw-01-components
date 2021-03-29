import propTypes from 'prop-types';

import styles from './Profile.module.css';

const ProfileName = ({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => (
  <div className={styles.container}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
);

ProfileName.defaultProps = {
  avatar:
    'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
};

ProfileName.propTypes = {
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string,
  followers: propTypes.number.isRequired,
  views: propTypes.number.isRequired,
  likes: propTypes.number.isRequired,
};

const Profile = ({ user }) => (
  <ProfileName
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    followers={user.stats.followers}
    views={user.stats.followers}
    likes={user.stats.followers}
  />
);

Profile.defaultProps = {
  user: propTypes.arrayOf(propTypes.shape).isRequired,
};

export default Profile;
