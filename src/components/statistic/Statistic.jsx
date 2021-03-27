import propTypes from "prop-types";
import styles from './Statistic.module.css'

const Statistic = ({ title, stats }) => (
    <section class={styles.statistics}>
  <h2 class="title">{title}</h2>

        <ul class="stat-list">
            {stats.map(({ id, label, percentage }) =>
                <li key={id} class={styles.item}>
      <span class={styles.label}>{label}</span>
                    <span class={styles.percentage}>{ percentage}%</span>
    </li>)}
     
    </ul>
</section>
)


Statistic.propTypes = {
    title: propTypes.string.isRequired, 
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
    }))
}

export default Statistic