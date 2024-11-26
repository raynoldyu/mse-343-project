import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Include a dedicated CSS file for login styles

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username === 'coach' && credentials.password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle dark mode
  };

  return (
    <div className={`login-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="login-card">
        <h1>Basketball Analytics</h1>
        <p>Login to manage your team and strategies</p>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
        <div className="login-footer">
          <p>Need help? <a href="#">Contact Support</a></p>
        </div>
        <div className="dark-mode-toggle">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            Enable Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;