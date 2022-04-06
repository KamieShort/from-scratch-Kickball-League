import React, { useState, useEffect } from 'react';
import { fetchPlayersById } from '../../services/fetchplayers';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './PlayersDetails.css';

export default function TeamsDetails() {
  const params = useParams();
  const [playerdeets, setPlayerDeets] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersById(params.id);

      setPlayerDeets(data);
    };
    fetchData();
  }, [params.id]);

  if (!playerdeets) return <div>...Loading</div>;
  return (
    <div className="playerdeets">
      <h2>Player Details</h2>
      <h3>{playerdeets.name}</h3>
      <p>Plays {playerdeets.position}</p> for
      <Link to={`/teams/${playerdeets.teams.id}`}>
        <p>{playerdeets.teams.name}</p>
      </Link>
    </div>
  );
}
