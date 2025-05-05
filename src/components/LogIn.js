import React, { useState } from 'react';
import demo from '../assets/2853458.jpg';

import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'abc@abc' && password === 'abc') {
      localStorage.setItem('loginData', JSON.stringify({ email, password }));
      alert('User is valid');
      navigate('/details');
    } else {
      alert('Invalid User');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center">
      <div className="row w-100">
        <div className="col-md-6 col-sm-12 p-0">
          <img src={demo} alt="Demo" className="img-fluid " />
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <form onSubmit={handleSubmit} className="w-75">
            <h2 className="h3 text-center mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
