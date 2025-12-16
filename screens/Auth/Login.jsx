import { useState } from 'react';

export default function Login({ onSubmit }) {
  const [mobile, setMobile] = useState('');

  return (
    <div className="p-4">
      <h2>Login</h2>
      <input
        placeholder="01XXXXXXXXX"
        value={mobile}
        onChange={e => setMobile(e.target.value)}
      />
      <button onClick={() => onSubmit(mobile)}>Send OTP</button>
    </div>
  );
}