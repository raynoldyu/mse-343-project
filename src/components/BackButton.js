import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ showHome }) => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      {showHome && (
        <button className="home-button" onClick={() => navigate('/dashboard')}>
          Home
        </button>
      )}
    </div>
  );
};

export default BackButton;
