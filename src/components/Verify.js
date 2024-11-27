import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Verify = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleVerify = () => {
    if (inputValue === '1234') {
      setMessage('Verification Successful!');
      navigate('/home');

    } else {
      setMessage('Verification Failed');
    }
  };

  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center',
      }}
    >
      <h2>OTP Verification</h2>
      <input
        type="text"
        placeholder="Enter OTP"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={handleVerify}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Verify
      </button>
      {message && (
        <p style={{ marginTop: '16px', color: message === 'Verification Successful!' ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Verify;
