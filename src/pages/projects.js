import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Gallery from 'components/gallery/gallery';

const Projects = ({ data }) => (
  <Layout>
    <Head pageTitle={data.projectsJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.projectsJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
    <Gallery items={data.projectsJson.projectList} />
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Projects;

export const query = graphql`
  query ProjectsQuery {
    projectsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      projectList {
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
