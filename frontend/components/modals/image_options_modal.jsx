import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

class OptionModal extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="modal-background" onClick={this.setState({ optionModalType: "closed" })}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          <div className="profile-modal">
            <div className="profile-modal-option">
              <button className="profile-modal-button" onClick={() => openModal("update")}>Edit Caption</button>
            </div>
            <div className="profile-modal-option">
              <button className="profile-modal-button" onClick={deleteImage(image.id)}>Delete Post</button>
            </div>
            <div className="profile-modal-option">
              <button className="profile-modal-button" onClick={this.setState({ optionModalType: "closed" })}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionModal;
