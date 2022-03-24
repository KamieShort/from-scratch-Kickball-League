import React, { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/fetchteams';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function TeamsDetails() {
  const params = useParams();
  const [teamdeets, setTeamDeets] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(params.id);
      setTeamDeets(data);
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <NavLink className="navlink" exact to="/home">
        Home
      </NavLink>

      <div>
        <h2>Team Details</h2>
        <p>{teamdeets.name}</p>
        <p>{teamdeets.city}</p>
        <p>{teamdeets.state}</p>
      </div>
    </>
  );
}
