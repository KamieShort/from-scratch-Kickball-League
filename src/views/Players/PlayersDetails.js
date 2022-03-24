import React, { useState, useEffect } from 'react';
import { fetchPlayersById } from '../../services/fetchplayers';
import { useParams } from 'react-router-dom';

export default function TeamsDetails() {
  const params = useParams();
  const [playerdeets, setPlayerDeets] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersById(params.id);
      setPlayerDeets(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <div>
      <h2>Player Details</h2>
      <p>{playerdeets.name}</p>
      <p>{playerdeets.position}</p>
      <p>{playerdeets.state}</p>
    </div>
  );
}
