import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';

import BackgroundImage from 'gatsby-background-image';
const StyledBackgroundImage = styled(BackgroundImage)`
  background-position: top left;
  background-repeat: repeat;
  background-size: contain;
`;
const Layout = ({ data, children }) => (
  <StyledBackgroundImage
    Tag="div"
    fluid={data.homeJson.backgroundImage.childImageSharp.fluid}
    backgroundColor={'#040e18'}
  >
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
  </StyledBackgroundImage>
);

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
