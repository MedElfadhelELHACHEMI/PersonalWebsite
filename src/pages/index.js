import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from 'components/layout';
import Title from 'components/title';
import { graphql } from 'gatsby';
import MEDIA from 'helpers/mediaTemplates';

const IndexContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  margin: 2rem 0 0 0;
  box-sizing: border-box;
  height: calc(100vh - 128px);
  ${MEDIA.TABLET`
    display: block;
  `};
  ${MEDIA.PHONE`
    flex-flow: column;
    padding: 0 3rem;
  `};
`;
const Avatar = styled.div`
  flex-basis: 50%;
  margin-right: 4rem;
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.4);
  ${MEDIA.TABLET`
    margin: 0;
    margin-bottom : 4rem;
  `};
  ${MEDIA.PHONE`
    margin: 0;
    margin-bottom : 4rem;
  `};
`;
const Text = styled.div`
  flex-basis: 50%;
`;

const Index = ({ data }) => (
  <Layout>
    <IndexContainer className="Container">
      <Avatar className="avatar-photo">
        <Img
          fluid={
            data.homeJson.gallery[0].image.childImageSharp.fluid
              ? data.homeJson.gallery[0].image.childImageSharp.fluid
              : {}
          }
          alt={data.homeJson.gallery[0].title}
        />
      </Avatar>
      <Text>
        <Title as="h2" size="main">
          {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
        </Title>
      </Text>
    </IndexContainer>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
