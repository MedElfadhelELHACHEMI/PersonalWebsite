import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import posed from 'react-pose';
import { Container } from './header.css';
import Logo from 'components/Logo/logo';
import Nav from 'components/header/nav';

const StyledLink = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;
// const StyledTitle = styled(props => <Title {...props} />)`
//   margin-left: 14px;
// `;
// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = () => (
  <AnimatedContainer>
    <Container>
      <StyledLink to="/">
        <Logo width="36px" height="42px" />
      </StyledLink>

      <Nav />
    </Container>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
