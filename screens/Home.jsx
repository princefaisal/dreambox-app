const campaigns = [
  { id: 1, title: 'Win Toyota Land Cruiser', price: 100, drawDate: '25 Dec 2025' },
  { id: 2, title: 'Win iPhone 15 Pro', price: 50, drawDate: '10 Jan 2026' }
];

export default function Home({ onAdd }) {
  return (
    <div className="p-4">
      <h2>Campaigns</h2>
      {campaigns.map(c => (
        <div key={c.id} className="card">
          <h3>{c.title}</h3>
          <p>Ticket: ৳{c.price}</p>
          <p>Draw: {c.drawDate}</p>
          <button onClick={() => onAdd(c)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}