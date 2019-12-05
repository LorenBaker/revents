import React from 'react';
import { connect } from 'react-redux';
import TestModal from './TestModal';

const modalLookup = {
  TestModal
};

const mapState = state => ({
  currentModal: state.modals
});

const modalManager = ({ currentModal }) => {
  let renderModal;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderModal}</span>;
};

export default connect(mapState)(modalManager);
