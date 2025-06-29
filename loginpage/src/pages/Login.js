import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <label>Email Address</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email address" />

      <label>Password</label>
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />

      <button className="secondary">Login</button>
    </div>
  );
}

export default Login;