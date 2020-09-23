import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: calc(100vh - 64px);
  grid-gap: 4rem;
  padding: 0 19%;
  margin: 0px;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  ${MEDIA.TABLET`
    padding: 0 4%;

  `};
`;
export const ItemContainer = styled.section`
  scroll-snap-align: center;
  height: 62%;
  border-radius: 50px;
  background: rgba(235, 235, 235, 0.9);
  box-shadow: 20px 20px 60px #c8c8c8, -20px -20px 60px #ffffff;
  overflow: hidden;
  padding: 0rem;
  align-self: center;
  ${MEDIA.TABLET`height: 72%;`};
`;
