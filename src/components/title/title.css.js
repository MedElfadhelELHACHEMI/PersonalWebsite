import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  display: block;
  font-family: Montserrat, sans-serif;
  color: #333;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      case 'title':
        return '600';
      case 'main':
        return '400';
      default:
        return '700';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      case 'main':
        return '3.5rem';
      case 'title':
        return '5rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.5;
  ${MEDIA.DESKTOP`
    font-size : 2.5rem;
  `};
  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
