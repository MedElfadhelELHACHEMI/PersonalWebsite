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
    padding: 0 3.5rem;
  `};
  ${MEDIA.PHONE`
    flex-flow: column;
    padding: 0 3rem;
  `};
`;
const Avatar = styled.div`
  flex-basis: 47.5%;
  //margin-right: 4rem;
  border-radius: 50px;
  background: #cccccc;
  box-shadow: 20px 20px 60px #adadad, -20px -20px 60px #ebebeb;
  overflow: hidden;
  ${MEDIA.TABLET`
    margin: 0;
    margin-bottom : 4rem;
  `};
  ${MEDIA.PHONE`
    margin: 0;
    margin-bottom : 4rem;
  `};
  ${MEDIA.DESKTOP`
    flex-basis: 60%
  `};
`;
const Text = styled.div`
  flex-basis: 47.5%;
  ${MEDIA.DESKTOP`
    flex-basis: 36%;
    margin-top: 28%
    p{
    margin-bottom: 0px;
    }
  `};
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
        <Title as="h1" size="title">
          {data.homeJson.ContentTitle}
        </Title>
        <Title as="p" size="main">
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
      ContentTitle
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
