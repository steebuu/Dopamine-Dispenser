import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

class OptionModal extends React.Component {
  constructor(props) {
    super(props);

  }

  handleLogout() {
    this.props.logout();
    this.props.closeModal();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="profile-modal">
        <div className="profile-modal-option">
          <button className="profile-modal-button" onClick={() => this.props.openModal("update")}>Edit Caption</button>
        </div>
        <div className="profile-modal-option">
          <button className="profile-modal-button" onClick={() => this.handleLogout()}>Delete</button>
        </div>
        <div className="profile-modal-option">
          <button className="profile-modal-button" onClick={() => this.props.closeModal()}>Cancel</button>
        </div>
      </div>
    );
  }
}

const msp = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    userId: ownProps.id
  }
}

const mdp = dispatch => {
  return {
    openModal: modal => { dispatch(openModal(modal)) },
    closeModal: () => { dispatch(closeModal()) },
    logout: () => { dispatch(logout()) }
  }
}

export default withRouter(connect(msp, mdp)(OptionModal));
