export default function Cart({ cart, onCheckout, updateQuantity, remove, balance }) {
  const total = cart.reduce((a, i) => a + i.campaign.price * i.quantity, 0);

  return (
    <div className="p-4">
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(i => (
        <div key={i.id}>
          <strong>{i.campaign.title}</strong>
          <p>৳{i.campaign.price} x {i.quantity}</p>
          <button onClick={() => updateQuantity(i.id, 1)}>+</button>
          <button onClick={() => updateQuantity(i.id, -1)}>-</button>
          <button onClick={() => remove(i.id)}>Remove</button>
        </div>
      ))}
      <hr />
      <p>Total: ৳{total}</p>
      <p>Wallet: ৳{balance}</p>
      <button onClick={onCheckout} disabled={total > balance}>Checkout</button>
    </div>
  );
}