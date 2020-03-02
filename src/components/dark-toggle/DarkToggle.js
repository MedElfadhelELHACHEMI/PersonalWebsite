import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = styled.div`
  width: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 5rem;
`;
// const LocalStorage = typeof window !== 'undefined' && window.localStorage;

const DarkToggle = props => {
  const toggleDarkMode = () => {
    // const isTrue = LocalStorage.getItem('darkMode') === 'true';
    // LocalStorage.setItem('darkMode', !isTrue);
  };
  return (
    <IconContainer onClick={toggleDarkMode}>
      <svg viewBox="0 0 512 512" width={props.width} height={props.height}>
        <path
          fill={props.color || '#333'}
          d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
        />
      </svg>
    </IconContainer>
  );
};
DarkToggle.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default DarkToggle;
