import React, { useState, useEffect } from 'react';
import { fetchPlayersById } from '../../services/fetchplayers';
import { useParams } from 'react-router-dom';

export default function TeamsDetails() {
  const params = useParams();
  const [playerdeets, setPlayerDeets] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersById(params.id);
      console.log(data);
      setPlayerDeets(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      <h2>Player Details</h2>
      <h3>{playerdeets.name}</h3>
      <p>Plays {playerdeets.position}</p> for
      <p>{playerdeets.teams.name}</p>
      {/* <p>{team.name}</p> */}
    </div>
  );
}
