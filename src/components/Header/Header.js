import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className="home">
      <NavLink className="navhome" exact to="/">
        Home
      </NavLink>
      <NavLink className="navteams" exact to="/teams">
        Teams
      </NavLink>
      <NavLink className="navplayers" exact to="/players">
        Players
      </NavLink>
    </div>
  );
}
