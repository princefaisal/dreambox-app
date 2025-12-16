export default function Account({ user, onLogout }) {
  return (
    <div className="p-4">
      <h2>Account</h2>
      <p>User ID: {user.id}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}