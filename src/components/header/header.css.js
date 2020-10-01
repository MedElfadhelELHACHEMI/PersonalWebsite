import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  height: 64px;
  min-height: 64px;
  max-height: 64px;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  ${MEDIA.TABLET`
  padding: 0 3.5rem;
  `};
  a {
    color: #333;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;
