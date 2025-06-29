import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/register"><button className="primary">Create Account</button></Link>
      <Link to="/login"><button className="secondary">Already Registered? Login</button></Link>
    </div>
  );
}

export default Welcome;