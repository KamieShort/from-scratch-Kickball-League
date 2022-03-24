import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/fetchteams';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();

      setTeams(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Teams</h2>
      {teams.map((team) => (
        <div key={team.id} {...team}>
          <p>{team.name}</p>
        </div>
      ))}
    </div>
  );
}
