import React from 'react';
import { connect } from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_actions';
import {logout} from '../../actions/session_actions';

class ProfileModal extends React.Component {
  constructor(props){
    super(props);
    
  }

  handleLogout(){
    this.props.logout();
    this.props.closeModal();
  }

  render(){
    return(
      <div className="profile-modal">
        <div className="profile-modal-option">
          <button className="profile-modal-button" onClick={()=>this.handleLogout()}>Log Out</button>
        </div>
        <div className="profile-modal-option">
          <button className="profile-modal-button" onClick={()=>this.props.closeModal()}>Cancel</button>          
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
    closeModal: () => {dispatch(closeModal())},
    logout: () => {dispatch(logout())}
  }
}

export default connect(msp, mdp)(ProfileModal);
