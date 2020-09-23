import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';
// import DarkToggle from 'components/dark-toggle/DarkToggle';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <a href="https://github.com/MedElfadhelELHACHEMI">GitHub</a>
      </li>
      {/*<li>*/}
      {/*  {' '}*/}
      {/*  <DarkToggle width="20px" height="20px" />*/}
      {/*</li>*/}
    </ul>
  </Container>
);

export default Nav;
