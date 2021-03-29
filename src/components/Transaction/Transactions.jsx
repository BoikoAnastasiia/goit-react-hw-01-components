import styles from './Transaction.module.css';
import propTypes from 'prop-types';

const TransactionHistory = ({ data }) => (
  <div className={styles.transaction}>
    <h2 className={styles.header}> Transactions </h2>
    <table className={styles.table}>
      <thead>
        <tr className={styles.miniheader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        {data.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.type}>{type}</td>
            <td className={styles.amount}>{amount}</td>
            <td className={styles.currency}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TransactionHistory.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
