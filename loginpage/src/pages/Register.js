import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: 'Marry Doe',
    phone: '30945804293',
    email: '12@mail.com',
    password: '34234',
    company: 'Company',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
  navigate('/account', { state: form }); 
};

  return (
    <div className="container">
      <h2>Create your PopX account</h2>

      <label>Full Name *</label>
      <input name="name" value={form.name } onChange={handleChange} placeholder="Enter full name" />

      <label>Phone Number *</label>
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Enter phone number" />

      <label>Email Address *</label>
      <input name="email" value={form.email} onChange={handleChange} placeholder="Enter email address" />

      <label>Password *</label>
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Enter password" />

      <label>Company Name *</label>
      <input name="company" value={form.company} onChange={handleChange} placeholder="Enter company name" />

      <label>Are you an Agency? *</label>
      <div className="radio-row">
        <label className="radio-option">
          <input
            type="radio"
            name="isAgency"
            value="yes"
            checked={form.isAgency === 'yes'}
            onChange={handleChange}
          />
          <span className="custom-radio" /> Yes
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="isAgency"
            value="no"
            checked={form.isAgency === 'no'}
            onChange={handleChange}
          />
          <span className="custom-radio" /> No
        </label>
      </div>

      <button className="primary" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}

export default Register;
