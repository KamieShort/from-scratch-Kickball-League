import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/fetchplayers';
import { Link } from 'react-router-dom';
import './Players.css';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();

      setPlayers(data);
    };
    fetchData();
  }, []);
  return (
    <div className="players">
      <h2>Players</h2>
      {players.map((player) => (
        <div key={player.id} {...player}>
          <Link to={`/players/${player.id}`}>
            <p>{player.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
