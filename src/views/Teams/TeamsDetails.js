import React, { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/fetchteams';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './TeamsDetails.css';

export default function TeamsDetails() {
  const params = useParams();
  const [teamdeets, setTeamDeets] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(params.id);

      setTeamDeets(data);
    };
    fetchData();
  }, [params.id]);

  if (!teamdeets) return <div>...Loading</div>;

  return (
    <div className="teamdeets">
      <h2>Team Details</h2>
      <h3>{teamdeets.name}</h3>
      <p>
        {teamdeets.city}, {teamdeets.state}
      </p>
      {teamdeets.players.map((player) => (
        <div key={player.id}>
          {player.position}: <Link to={`/players/${player.id}`}>{player.name}</Link>
        </div>
      ))}
    </div>
  );
}
