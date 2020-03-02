import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Title, Copy } from './item.css';
import Modal from 'components/modal/modal';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const AnimatedFigure = posed.figure({
  enter: { opacity: 1, delay: 5000 },
  exit: { opacity: 0, delay: 350 },
});

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
const MainContainer = styled.div`
  position: relative;
  width: calc(100% / 1.61803398875) !important;
  height: 100%;
  background: transparent;
  ${MEDIA.TABLET`
   width: 100% !important;
  height: calc(100% / 1.61803398875) !important;
  `};
`;
const MainImage = styled(Img)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const SecondContainer = styled.div`
  width: calc(100% - (100% / 1.61803398875)) !important;
  height: 100%;
  background: transparent;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  ${MEDIA.TABLET`
  flex-flow: row-reverse nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100% !important;
  height: calc(100% - (100% / 1.61803398875)) !important;
  `};
`;
const Third = styled.div`
  width: 100%;
  height: calc(100% / 1.61803398875) !important;
  background: transparent;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  ${MEDIA.TABLET`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
    height: 100% !important;
  width: calc(100% / 1.61803398875) !important;
  `};
`;
const Fourth = styled.div`
  width: 100%;
  height: calc(100% - (100% / 1.61803398875)) !important;
  background: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;
  border: 1px solid #eee;
  box-sizing: border-box;
  ${MEDIA.TABLET`
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
    height: 100% !important;
  width: calc(100% - (100% / 1.61803398875)) !important;
  `};
`;
const Button = styled.button`
  width: calc(100% / 1.61803398875) !important;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  color: #333;
  outline: none;
  border: none;
  border-left: 1px solid #eee;
`;
const Rest = styled.div`
  width: calc(100% - (100% / 1.61803398875)) !important;
  background: transparent;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
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
        <Container>
          <MainContainer>
            <MainImage
              fluid={image ? image.childImageSharp.fluid : {}}
              alt={title}
            />
          </MainContainer>
          <SecondContainer>
            <Third>
              <Title>{title}</Title>
              <Copy>{copy}</Copy>
            </Third>
            <Fourth>
              <Rest>
                <span>INFO</span>
              </Rest>
              <Button>Open Github Repo</Button>
            </Fourth>
          </SecondContainer>
        </Container>
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
