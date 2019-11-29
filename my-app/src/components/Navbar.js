import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react'

const Navbar = () => (
  <List bulleted horizontal>
    <List.Item>
      <Link to="/">Homepage</Link>
    </List.Item>
    <List.Item>
      <Link to="/about">About</Link>
    </List.Item>
  </List>
)

export default Navbar;
