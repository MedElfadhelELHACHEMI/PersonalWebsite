import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './createContext';

// const LocalStorage = typeof window !== 'undefined' && window.localStorage;
// The provider, which holds the page-wide store and its actions.
// Feel free to abstract actions and state away from this file.
const AppProvider = props => {
  const [darkMode, setDarkMode] = useState(
    // LocalStorage.getItem('darkMode') === 'true'
    false
  );
  const [open, setOpen] = useState(false);
  const showModal = () => setOpen(true);
  const hideModal = () => setOpen(false);
  // useEffect(() => {
  //   setDarkMode(LocalStorage.getItem('darkMode') === 'true');
  // }, [LocalStorage.getItem('darkMode')]);
  return (
    <Provider value={{ darkMode, open, showModal, hideModal }}>
      {props.children}
    </Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
