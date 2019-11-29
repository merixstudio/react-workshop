import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul className="navbar">
    <li>
      <Link to="/">Homepage</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Navbar;
