import propTypes from "prop-types";
import styles from './styles.module.css'

const Statistic = ({ title, stats }) => (
    <section class={styles.statistics}>
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class={styles.label}>.docx</span>
      <span class={styles.percentage}>4%</span>
    </li>
    <li class="item">
      <span class={styles.label}>.mp3</span>
      <span class={styles.percentage}>14%</span>
    </li>
    <li class="item">
      <span class={styles.label}>.pdf</span>
      <span class={styles.percentage}>41%</span>
    </li>
    <li class="item">
      <span class={styles.label}>.mp4</span>
      <span class={styles.percentage}>12%</span>
    </li>
  </ul>
</section>
)

export default Statistic