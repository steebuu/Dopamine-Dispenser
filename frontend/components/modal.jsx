import React from 'react';
import ProfileModal from '../components/profile/profile_modal';
import ImageModalContainer from '../components/feed/image_modal_container';
import {withRouter} from 'react-router-dom';

class Modal extends React.Component{
  // ({ modal, closeModal }) {
  // debugger;
  constructor(props){
    super(props);
  }
  render(){
    const {type, closeModal, users, id} = this.props;
    if (!type) {
      return null;
    }
    let component;
    switch (type) {
      case 'profile':
        component = <ProfileModal></ProfileModal>
        break;
      case 'image':
        component = <ImageModalContainer id={id}></ImageModalContainer>
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
}

export default Modal;