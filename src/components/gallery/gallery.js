import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/gallery/item';
import { Container, ItemContainer } from './gallery.css';

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <ItemContainer key={i}>
        <Item {...item} />
      </ItemContainer>
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
