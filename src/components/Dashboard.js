import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [games, setGames] = useState([
    {
      id: 1,
      opponent: 'Lions',
      date: 'Nov 27, 2024',
      time: '7:00 PM',
      location: 'Main Arena, City Center',
      notes: 'Focus on 3-point defense and ball movement.',
      logo: 'https://via.placeholder.com/40?text=L',
    },
    {
      id: 2,
      opponent: 'Tigers',
      date: 'Nov 30, 2024',
      time: '6:00 PM',
      location: 'North Arena, Uptown',
      notes: 'Double-team key scorer, control pace of the game.',
      logo: 'https://via.placeholder.com/40?text=T',
    },
    {
      id: 3,
      opponent: 'Bears',
      date: 'Dec 3, 2024',
      time: '8:00 PM',
      location: 'South Arena, Downtown',
      notes: 'Avoid turnovers, play aggressive on offense.',
      logo: 'https://via.placeholder.com/40?text=B',
    },
    {
      id: 4,
      opponent: 'Wolves',
      date: 'Dec 7, 2024',
      time: '9:00 PM',
      location: 'East Arena, Suburbs',
      notes: 'Fast break defense, control the paint.',
      logo: 'https://via.placeholder.com/40?text=W',
    },
    {
      id: 5,
      opponent: 'Panthers',
      date: 'Dec 10, 2024',
      time: '5:00 PM',
      location: 'Main Arena, City Center',
      notes: 'Focus on offensive rebounds and free throws.',
      logo: 'https://via.placeholder.com/40?text=P',
    },
    {
      id: 6,
      opponent: 'Hawks',
      date: 'Dec 12, 2024',
      time: '6:30 PM',
      location: 'North Arena, Uptown',
      notes: 'Control fast breaks and focus on perimeter defense.',
      logo: 'https://via.placeholder.com/40?text=H',
    },
    {
      id: 7,
      opponent: 'Eagles',
      date: 'Dec 14, 2024',
      time: '7:15 PM',
      location: 'West Arena, Suburbs',
      notes: 'Tight defense on the key player, avoid fouls.',
      logo: 'https://via.placeholder.com/40?text=E',
    },
    {
      id: 8,
      opponent: 'Falcons',
      date: 'Dec 16, 2024',
      time: '8:00 PM',
      location: 'South Arena, Downtown',
      notes: 'Increase ball movement, watch for traps.',
      logo: 'https://via.placeholder.com/40?text=F',
    },
    {
      id: 9,
      opponent: 'Raptors',
      date: 'Dec 19, 2024',
      time: '7:30 PM',
      location: 'Main Arena, City Center',
      notes: 'Switch defense schemes frequently.',
      logo: 'https://via.placeholder.com/40?text=R',
    },
    {
      id: 10,
      opponent: 'Grizzlies',
      date: 'Dec 22, 2024',
      time: '6:45 PM',
      location: 'West Arena, Suburbs',
      notes: 'Protect the paint, limit second-chance points.',
      logo: 'https://via.placeholder.com/40?text=G',
    },
    {
      id: 11,
      opponent: 'Cougars',
      date: 'Dec 26, 2024',
      time: '8:00 PM',
      location: 'North Arena, Uptown',
      notes: 'Force turnovers, run transition offense.',
      logo: 'https://via.placeholder.com/40?text=C',
    },
    {
      id: 12,
      opponent: 'Sharks',
      date: 'Dec 28, 2024',
      time: '7:00 PM',
      location: 'South Arena, Downtown',
      notes: 'Defend the 3-point line, push fast breaks.',
      logo: 'https://via.placeholder.com/40?text=S',
    },
    {
      id: 13,
      opponent: 'Dolphins',
      date: 'Dec 31, 2024',
      time: '5:30 PM',
      location: 'Main Arena, City Center',
      notes: 'Double-team the post player, focus on pick-and-roll defense.',
      logo: 'https://via.placeholder.com/40?text=D',
    },
    {
      id: 14,
      opponent: 'Hornets',
      date: 'Jan 3, 2025',
      time: '6:45 PM',
      location: 'East Arena, Suburbs',
      notes: 'Limit turnovers, attack the basket aggressively.',
      logo: 'https://via.placeholder.com/40?text=H',
    },
    {
      id: 15,
      opponent: 'Cardinals',
      date: 'Jan 5, 2025',
      time: '7:15 PM',
      location: 'West Arena, Suburbs',
      notes: 'Focus on transition defense, avoid fouling jump shooters.',
      logo: 'https://via.placeholder.com/40?text=C',
    },
    {
      id: 16,
      opponent: 'Bobcats',
      date: 'Jan 7, 2025',
      time: '7:00 PM',
      location: 'North Arena, Uptown',
      notes: 'Win the rebounding battle, move the ball quickly.',
      logo: 'https://via.placeholder.com/40?text=B',
    },
    {
      id: 17,
      opponent: 'Mustangs',
      date: 'Jan 9, 2025',
      time: '8:00 PM',
      location: 'South Arena, Downtown',
      notes: 'Use zone defense, limit 3-point attempts.',
      logo: 'https://via.placeholder.com/40?text=M',
    },
    {
      id: 18,
      opponent: 'Cobras',
      date: 'Jan 12, 2025',
      time: '6:30 PM',
      location: 'East Arena, Suburbs',
      notes: 'Defend the pick-and-roll, contest mid-range shots.',
      logo: 'https://via.placeholder.com/40?text=C',
    },
    {
      id: 19,
      opponent: 'Pythons',
      date: 'Jan 14, 2025',
      time: '7:00 PM',
      location: 'Main Arena, City Center',
      notes: 'Aggressive full-court press, protect the paint.',
      logo: 'https://via.placeholder.com/40?text=P',
    },
    {
      id: 20,
      opponent: 'Vipers',
      date: 'Jan 17, 2025',
      time: '6:00 PM',
      location: 'North Arena, Uptown',
      notes: 'Control the pace of the game, double-team key scorers.',
      logo: 'https://via.placeholder.com/40?text=V',
    },
  ]);
  
  

  // Function to handle editing notes
  const handleEditClick = (id) => {
    const newNotes = prompt('Enter new notes:');
    if (newNotes !== null) {
      setGames((prevGames) =>
        prevGames.map((game) =>
          game.id === id ? { ...game, notes: newNotes } : game
        )
      );
    }
  };

  // Function to handle row removal
  const handleRemoveClick = (id) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id));
  };

  // Function to handle row click
  const handleRowClick = (id) => {
    navigate(`/opponent/${id}`);
  };

  // Function to handle logout
  const handleLogout = () => {
    navigate('/'); // Navigate back to the login page
  };

  return (
    <div className="dashboard-container">
      <div className="header">
        <BackButton />
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <h1>Upcoming Games</h1>
      <p>Prepare for the next matchups with detailed insights and strategies.</p>
      <table className="games-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Opponent</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Coach Notes</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id} className="clickable-row">
              <td>
                <img src={game.logo} alt={`${game.opponent} logo`} className="team-logo" />
              </td>
              <td onClick={() => handleRowClick(game.id)}>{game.opponent}</td>
              <td onClick={() => handleRowClick(game.id)}>{game.date}</td>
              <td onClick={() => handleRowClick(game.id)}>{game.time}</td>
              <td onClick={() => handleRowClick(game.id)}>{game.location}</td>
              <td>{game.notes}</td>
              <td>
                <button
                  className="icon-button"
                  onClick={() => handleEditClick(game.id)}
                  title="Edit Notes"
                >
                  🖉
                </button>
              </td>
              <td>
                <button
                  className="icon-button"
                  onClick={() => handleRemoveClick(game.id)}
                  title="Remove Row"
                >
                  ✔
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
