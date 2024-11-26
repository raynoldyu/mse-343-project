import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  // Team statistics data for pie chart
  const teamStatsData = [
    { name: 'Wins', value: 22 },
    { name: 'Losses', value: 8 },
  ];

  const COLORS = ['#4CAF50', '#F44336'];
  const navigate = useNavigate();

  const nav = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/'); // Navigate back to the login page
  };

  const players = [
    { id: 1, name: 'Michael Johnson', position: 'Point Guard', number: 12, stats: '18.5 PPG' },
    { id: 2, name: 'Carlos Rodriguez', position: 'Shooting Guard', number: 23, stats: '16.2 PPG' },
    { id: 3, name: 'David Thompson', position: 'Small Forward', number: 34, stats: '15.7 PPG' },
    { id: 4, name: 'Marcus Williams', position: 'Power Forward', number: 45, stats: '14.3 PPG' },
    { id: 5, name: 'Andre Miller', position: 'Center', number: 52, stats: '12.9 PPG' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <div
        style={{
          background: '#333',
          color: '#fff',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Section: Title and Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: 0, marginRight: '32px', color: '#fff', fontSize: '1.5rem' }}>Sport Analytics</h1>
          <nav>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
              <li
                style={{
                  marginRight: '16px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  backgroundColor: '#555',
                  borderRadius: '4px',
                  color: '#fff',
                  fontWeight: 'bold',
                }}
              >
                MyTeam
              </li>
              <li
                style={{
                  marginRight: '16px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  color: '#fff',
                }}
                onClick={nav}
              >
                Schedule
              </li>
              <li
                style={{
                  marginRight: '16px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  color: '#fff',
                }}
              >
                Opponent
              </li>
              <li
                style={{
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  color: '#fff',
                }}
              >
                Playbooks
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <div>
        <button
          style={{
            padding: '10px 20px', // Adjust padding for even spacing
            cursor: 'pointer',
            borderRadius: '4px',
            backgroundColor: '#ff4d4d',
            color: '#fff',
            border: 'none',
            fontSize: '14px', // Ensure consistent font size
            fontWeight: 'bold',
            lineHeight: '1.2', // Adjust line height to center text
            display: 'flex', // Use flexbox for perfect centering
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
          }}
          onClick={handleLogout}
        >
          Logout
        </button>
        </div>
      </div>

      {/* Team Info */}
      <div
        style={{
          margin: '16px 0',
          padding: '8px 16px',
          textAlign: 'left',
        }}
      >
        <h2 style={{ margin: 0, marginBottom: '8px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          WATERLOO WARRIORS
        </h2>
        <div style={{ marginLeft: '0' }}>
          <p style={{ margin: 0, fontSize: '1.2rem', textAlign: 'left' }}>Win-Loss: 22 - 8</p>
        </div>
      </div>

      {/* Sub-navbar */}
      <div style={{ background: '#ddd', padding: '8px 16px', textAlign: 'left' }}>
        <nav>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'inline-flex' }}>
            <li
              style={{
                marginRight: '16px',
                padding: '8px 16px',
                cursor: 'pointer',
                backgroundColor: '#bbb',
                borderRadius: '4px',
                color: '#333',
                fontWeight: 'bold',
              }}
            >
              Analytics
            </li>
            <li
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                borderRadius: '4px',
                color: '#333',
              }}
            >
              Training
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ padding: '16px', flex: '1' }}>
        {/* Team Statistics Section */}
        <div
          style={{
            marginBottom: '24px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h2 style={{ margin: 0, marginBottom: '16px' }}>Team Performance</h2>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={teamStatsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {teamStatsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Player List Section */}
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h2 style={{ margin: 0, marginBottom: '16px' }}>Team Roster</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ borderBottom: '2px solid #ddd', padding: '8px' }}>Number</th>
                <th style={{ borderBottom: '2px solid #ddd', padding: '8px' }}>Name</th>
                <th style={{ borderBottom: '2px solid #ddd', padding: '8px' }}>Position</th>
                <th style={{ borderBottom: '2px solid #ddd', padding: '8px' }}>Avg Points</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr key={player.id} style={{ textAlign: 'center', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '8px' }}>{player.number}</td>
                  <td style={{ padding: '8px' }}>{player.name}</td>
                  <td style={{ padding: '8px' }}>{player.position}</td>
                  <td style={{ padding: '8px' }}>{player.stats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Landing;
