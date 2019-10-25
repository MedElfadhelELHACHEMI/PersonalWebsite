import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Title, Copy } from './item.css';

const AnimatedFigure = posed.figure({
  enter: { opacity: 1, delay: 5000 },
  exit: { opacity: 0, delay: 350 },
});

const Item = ({ title, copy, image }) => (
  <AnimatedFigure style={{ opacity: 0 }}>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </AnimatedFigure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
