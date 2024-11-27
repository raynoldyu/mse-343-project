// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import OpponentReport from './components/OpponentReport';
import Landing from './components/Landing';
import Verify from './components/Verify';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/opponent/:id" element={<OpponentReport />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/verify" element={<Verify />} />

      </Routes>
    </Router>
  );
}

export default App;
