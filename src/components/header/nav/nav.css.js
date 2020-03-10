import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
