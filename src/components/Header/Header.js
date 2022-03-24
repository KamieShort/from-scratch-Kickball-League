import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <NavLink className="nav" exact to="/">
        Home
      </NavLink>
      <NavLink className="nav" exact to="/teams">
        Teams
      </NavLink>
      <NavLink className="nav" exact to="/players">
        Players
      </NavLink>
    </div>
  );
}
