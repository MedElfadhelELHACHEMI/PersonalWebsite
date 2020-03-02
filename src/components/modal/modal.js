import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Close } from './modal.css';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

import '@reach/dialog/styles.css';
import styled from 'styled-components';

const StyledDialog = styled(Dialog)`
  background: #fefefa !important;
  width: calc(100% / 1.61803398875) !important;
  height: calc(100% / 1.61803398875) !important;
  padding: 0 !important;
`;

// This component is here only to to showcase the
// React Context integration. No need to keep this if
// you don't require a Modal in your project.
export default class Modal extends PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.props.open && this.props.hideModal();
    }
  };

  disableScrolling(open) {
    // Disables scrolling when the modal is open, as suggested by
    // https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  render() {
    const { children, open, hideModal } = this.props;

    if (typeof document !== 'undefined') {
      this.disableScrolling(open);
    }

    return (
      <>
        <StyledDialog isOpen={open}>
          <Close onClick={hideModal}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </Close>
          {children}
        </StyledDialog>
      </>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};
