export default function Tickets({ tickets }) {
  return (
    <div className="p-4">
      <h2>My Tickets</h2>
      {tickets.length === 0 && <p>No tickets yet</p>}
      {tickets.map(t => (
        <div key={t.id}>
          <strong>{t.campaignTitle}</strong>
          <p>ID: {t.id}</p>
          <p>Draw: {t.drawDate}</p>
        </div>
      ))}
    </div>
  );
}