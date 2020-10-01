import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import posed from 'react-pose';
import { Title, Copy } from './item.css';
// import Modal from 'components/modal/modal';
import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import Scissors from '../scissors';

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
  border-right: 1px dashed #c3c3c3;
  ${MEDIA.TABLET`
  width: 100%;
  height: 72%;
  border-bottom: 1px dashed #C3C3C3;
  border-right: unset;
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
  padding: 1rem 0rem 1rem 1rem;
  `};
`;
const StyledButton = styled.a`
  width: 100%;
  height: 28%;
  color: #c3c3c3;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  ${MEDIA.TABLET`
      height:100%;
      width:28%;
  `};
  &::before {
    content: '';
    border-bottom: 1px dashed #c3c3c3;
    position: absolute;
    background: transparent;
    height: 1px;
    width: calc(100% + 2rem);
    top: 0;
    box-shadow: 20px 20px 60px #c8c8c8, -20px -20px 60px #ffffff;
    ${MEDIA.TABLET`
      border-bottom: 0px;
      border-right: 1px dashed #c3c3c3;
      height: calc(100% + 2rem);
      width:1px;
      left:0;
      top:-1rem;
  `};
  }
`;
const IconContainer = styled.div`
  position: absolute;
  top: -7px;
  right: -8px;
  box-sizing: border-box;
  height: 16px;
  width: 20px;
  ${MEDIA.TABLET`
      transform: rotateZ(90deg);
      bottom: -7px;
      left:-8px;
      top: unset;
      right: unset;
  `};
`;
const ButtonText = styled.p`
  margin: 0;
  font-size: 2.7rem;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  ${MEDIA.DESKTOP`
      font-size: 1.7rem;
  `};
  ${MEDIA.TABLET`
      font-size: 1.7rem;
  `};
  ${MEDIA.PHONE`
     font-size: 1.7rem;
  `};
`;
const TextContainer = styled.div`
  width: 100%;
  height: 72%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  ${MEDIA.TABLET`
    width: 72%;
    height: 100%;
    padding-left: 1rem;
  `};
`;
const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 2rem;
  font-weight: 600;
`;
const Item = ({ title, copy, image, githubLink, link }) => {
  return (
    <StyledFigure style={{ opacity: 0 }}>
      <Container>
        <ImageContainer>
          <StyledImg
            fluid={image ? image.childImageSharp.fluid : {}}
            alt={title}
          />
        </ImageContainer>
        <InfoContainer>
          <TextContainer>
            <Title as="h1" size="title">
              {title}
            </Title>
            <Copy>
              {copy}
              <br/>
              {!!link && (
                <Link href={link} target="_blank">
                  Demo
                </Link>
              )}
            </Copy>
          </TextContainer>

          <StyledButton
            /* eslint-disable-next-line no-console */
            onClick={() => console.log(githubLink)}
            href={githubLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconContainer>
              <Scissors color="#c3c3c3" height="16px" />
            </IconContainer>
            <ButtonText>Open Github Repo</ButtonText>
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
  link: PropTypes.string,
};

export default Item;

// <Modal open={openModal} hideModal={() => setOpenModal(false)}>

// </Modal>
