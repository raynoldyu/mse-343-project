import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie, Bar, Scatter } from 'react-chartjs-2';
import './OpponentReport.css';

// Register Chart.js components
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const OpponentReport = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use navigate for the back button

  // Dummy data for rosters
  const opponentRoster = [
    { name: 'Player 1', position: 'Guard', points: 10, rebounds: 5 },
    { name: 'Player 2', position: 'Forward', points: 12, rebounds: 7 },
    { name: 'Player 3', position: 'Center', points: 15, rebounds: 10 },
    { name: 'Player 4', position: 'Guard', points: 8, rebounds: 3 },
    { name: 'Player 5', position: 'Forward', points: 9, rebounds: 4 },
  ];

  const myTeamRoster = [
    { name: 'My Player 1', position: 'Guard', points: 14, rebounds: 6 },
    { name: 'My Player 2', position: 'Forward', points: 11, rebounds: 8 },
    { name: 'My Player 3', position: 'Center', points: 18, rebounds: 12 },
    { name: 'My Player 4', position: 'Guard', points: 7, rebounds: 4 },
    { name: 'My Player 5', position: 'Forward', points: 10, rebounds: 5 },
  ];

  // Pie Chart Data for Team Points
  const pieData = {
    labels: ['Opponent Points', 'My Team Points'],
    datasets: [
      {
        data: [
          opponentRoster.reduce((acc, player) => acc + player.points, 0),
          myTeamRoster.reduce((acc, player) => acc + player.points, 0),
        ],
        backgroundColor: ['#f45c43', '#007bff'],
        hoverBackgroundColor: ['#d94a3a', '#0056b3'],
      },
    ],
  };

  // Bar Chart Data for Rebounds
  const barData = {
    labels: opponentRoster.map((player) => player.name),
    datasets: [
      {
        label: 'Opponent Rebounds',
        data: opponentRoster.map((player) => player.rebounds),
        backgroundColor: '#f45c43',
      },
      {
        label: 'My Team Rebounds',
        data: myTeamRoster.map((player) => player.rebounds),
        backgroundColor: '#007bff',
      },
    ],
  };

  // Scatter Plot Data for Points vs Rebounds
  const scatterData = {
    datasets: [
      {
        label: 'Opponent Players',
        data: opponentRoster.map((player) => ({
          x: player.points,
          y: player.rebounds,
        })),
        backgroundColor: '#f45c43',
      },
      {
        label: 'My Team Players',
        data: myTeamRoster.map((player) => ({
          x: player.points,
          y: player.rebounds,
        })),
        backgroundColor: '#007bff',
      },
    ],
  };

  return (


    <div className="opponent-report">
      <h1>Opponent Report for Game {id}</h1>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      {/* Table Section */}
      <div className="team-stats-section">
        <h2>Team Comparison Table</h2>
        <div className="scrollable-table">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Player</th>
                <th>Position</th>
                <th>Points</th>
                <th>Rebounds</th>
              </tr>
            </thead>
            <tbody>
              {opponentRoster.map((player, index) => (
                <tr key={`opponent-${index}`}>
                  <td>Opponent</td>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.points}</td>
                  <td>{player.rebounds}</td>
                </tr>
              ))}
              {myTeamRoster.map((player, index) => (
                <tr key={`myTeam-${index}`}>
                  <td>My Team</td>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.points}</td>
                  <td>{player.rebounds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-container">
          <h2>Points Distribution</h2>
          <Pie data={pieData} />
        </div>
        <div className="chart-container">
          <h2>Rebounds Comparison</h2>
          <Bar data={barData} />
        </div>
        <div className="chart-container">
          <h2>Points vs Rebounds (Scatter Plot)</h2>
          <Scatter
            data={scatterData}
            options={{
              scales: {
                x: {
                  title: { display: true, text: 'Points' },
                },
                y: {
                  title: { display: true, text: 'Rebounds' },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default OpponentReport;
