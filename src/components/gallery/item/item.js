import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Title, Copy } from './item.css';
// import Modal from 'components/modal/modal';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const AnimatedFigure = posed.figure({
  enter: { opacity: 1, delay: 5000 },
  exit: { opacity: 0, delay: 350 },
});
const StyledFigure = styled(AnimatedFigure)`
  height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  ${MEDIA.TABLET`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  `};
`;
const ImageContainer = styled.div`
  width: 72%;
  height: 100%;
  position: relative;
  margin: 0px;
  box-sizing: border-box;

  background: #ebebeb;
  box-shadow: 20px 20px 60px #c8c8c8, -20px -20px 60px #ffffff;
  ${MEDIA.TABLET`
  width: 100%;
  height: 72%;
  `};
`;
const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
`;
const InfoContainer = styled.div`
  width: 28%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 1rem;
  box-sizing: border-box;
  ${MEDIA.TABLET`
  width: 100%;
  height: 28%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 2rem;
  `};
`;
const StyledButton = styled.a`
  width: 100%;
  height: 28%;
  color: #c3c3c3;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: linear-gradient(145deg, #d4d4d4, #fbfbfb);
  box-shadow: 20px 20px 60px #c8c8c8, -20px -20px 60px #ffffff;
`;

const Item = ({ title, copy, image, githubLink }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <StyledFigure
      style={{ opacity: 0 }}
      onClick={() => {
        setOpenModal(!openModal);
      }}
    >
      <Container>
        <ImageContainer>
          <StyledImg
            fluid={image ? image.childImageSharp.fluid : {}}
            alt={title}
          />
        </ImageContainer>
        <InfoContainer>
          <Title as="h1" size="title">
            {title}
          </Title>
          <Copy>{copy}</Copy>
          <StyledButton
            /* eslint-disable-next-line no-console */
            onClick={() => console.log(githubLink)}
            href={githubLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Open Github Repo
          </StyledButton>
        </InfoContainer>
      </Container>
    </StyledFigure>
  );
};

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
  githubLink: PropTypes.string,
};

export default Item;

// <Modal open={openModal} hideModal={() => setOpenModal(false)}>

// </Modal>
