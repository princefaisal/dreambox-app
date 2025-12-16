export default function Wallet({ balance, transactions, onAddFunds }) {
  return (
    <div className="p-4">
      <h2>Wallet</h2>
      <h3>৳{balance}</h3>
      <button onClick={() => onAddFunds(500)}>Add ৳500</button>
      <h4>Transactions</h4>
      {transactions.map(t => (
        <div key={t.id}>{t.type}: ৳{t.amount}</div>
      ))}
    </div>
  );
}