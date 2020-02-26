import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Title, Copy } from './item.css';
import Modal from 'components/modal/modal';

const AnimatedFigure = posed.figure({
  enter: { opacity: 1, delay: 5000 },
  exit: { opacity: 0, delay: 350 },
});

const Item = ({ title, copy, image }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <AnimatedFigure
      style={{ opacity: 0 }}
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Copy>{copy}</Copy>
      </figcaption>
      <Modal open={openModal} hideModal={() => setOpenModal(false)}>
        <div>{title}</div>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
    </AnimatedFigure>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
