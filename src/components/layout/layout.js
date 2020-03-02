import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import BackgroundImage from 'gatsby-background-image';
import { Consumer } from '../../store/createContext';

const StyledBackgroundImage = styled(BackgroundImage)`
  background-position: top left;
  background-repeat: repeat;
  background-size: contain;
  height: auto;
  min-height: 100vh;
  position: fixed;
  &::before {
    opacity: 0.8 !important;
  }
`;
const Layout = ({ data, children }) => {
  return (
    <Consumer>
      {({ darkMode }) => (
        <StyledBackgroundImage
          Tag="div"
          fluid={
            darkMode
              ? data.homeJson.backgroundImageDark.childImageSharp.fluid
              : data.homeJson.backgroundImage.childImageSharp.fluid
          }
          backgroundColor={darkMode ? '#000' : '#fefefa'}
        >
          <GlobalStyle />
          <Head />
          <Header title="" />
          {children}
        </StyledBackgroundImage>
      )}
    </Consumer>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
        homeJson {
          backgroundImage {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          backgroundImageDark {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
