import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 3rem;
  font-weight: 600;
  margin: 0px;
  width: 100%;
  color: #333;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 400;

  ${MEDIA.TABLET`
      font-size: 2rem;
  `};
`;
