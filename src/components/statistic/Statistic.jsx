import propTypes from 'prop-types';
import styles from './Statistic.module.css';

const Statistic = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className="title">{title}</h2>

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistic.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ),
};

Statistic.defaultProps = {
  title: '',
};

export default Statistic;
