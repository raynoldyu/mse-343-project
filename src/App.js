// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OpponentReport from './components/OpponentReport';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/opponent/:id" element={<OpponentReport />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
