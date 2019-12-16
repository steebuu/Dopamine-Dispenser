import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

class ImageModal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="image-modal">
        <div className="image-modal-picture-div">picture here</div>
        <div className="image-modal-info-div">
          <div className="image-modal-info-user-div">header here</div>
          <div className="image-modal-info-comments-div">comments here</div>
          <div className="image-modal-info-actions-div">actions here</div>
        </div>
      </div>
    )
  }
}

const msp = state => {
  return {
    modal: state.ui.modal
  }
}

const mdp = dispatch => {
  return {
    openModal: modal => { dispatch(openModal(modal)) },
    closeModal: () => { dispatch(closeModal()) }
  }
}

export default connect(msp, mdp)(ImageModal);