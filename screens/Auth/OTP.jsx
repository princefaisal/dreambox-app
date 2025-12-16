import { useState } from 'react';

export default function OTP({ onVerify }) {
  const [code, setCode] = useState('');

  return (
    <div className="p-4">
      <h2>Verify OTP</h2>
      <input
        placeholder="6-digit code"
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <button onClick={() => onVerify(code)}>Verify</button>
    </div>
  );
}