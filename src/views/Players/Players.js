import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/fetchplayers';

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
    <div>
      <h2>Players</h2>
      {players.map((player) => (
        <div key={player.id} {...player}>
          <p>{player.name}</p>
        </div>
      ))}
    </div>
  );
}
