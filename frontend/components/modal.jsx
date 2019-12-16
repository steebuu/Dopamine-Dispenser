import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import ProfileModal from '../components/profile/profile_modal';
import ImageModal from '../components/feed/image_modal';

function Modal({ modal, closeModal }) {
  // debugger;
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'profile':
      component = <ProfileModal></ProfileModal>
      break;
    case 'image':
      component = <ImageModal></ImageModal>
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);