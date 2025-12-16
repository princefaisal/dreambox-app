export default function Navigation({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'cart', label: 'Cart' },
    { id: 'wallet', label: 'Wallet' },
    { id: 'tickets', label: 'Tickets' },
    { id: 'account', label: 'Account' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid #ddd',
        background: '#fff',
        padding: '10px 0',
        zIndex: 1000
      }}
    >
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            background: 'none',
            border: 'none',
            fontWeight: active === tab.id ? 'bold' : 'normal',
            color: active === tab.id ? '#000' : '#666',
            cursor: 'pointer'
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
