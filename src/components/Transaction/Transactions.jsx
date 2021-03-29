import styles from './Transaction.module.css';

const TransactionHistory = ({ data }) => (
  <div className={styles.transaction}>
    <h2> Transactions </h2>
    <table className={styles.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {data.map(({ id, type, amount, currency }) => (
        <tbody>
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  </div>
);

export default TransactionHistory;
