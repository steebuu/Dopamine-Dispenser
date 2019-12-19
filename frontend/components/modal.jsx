import React from 'react';
import {Redirect} from 'react-router-dom';
import ProfileModal from '../components/profile/profile_modal';
import ImageModalContainer from '../components/feed/image_modal_container';
import ImageUploadModalContainer from './modals/image_upload_modal_container';
import PreUploadModal from './modals/pre_upload_modal';
import ImageUpdateModalContainer from './modals/image_update_modal_container';

class Modal extends React.Component{
  constructor(props){
    super(props);
    
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(){
    this.props.closeModal();
    this.props.history.push(`/users/${this.props.userId}`);
  }

  render(){
    const {modal} = this.props;
    if (!modal) {
      return null;
    }
    let component;
    switch (modal) {
      case 'profile':
        component = <ProfileModal></ProfileModal>
        break;
      case 'image':
        component = <ImageModalContainer></ImageModalContainer>
        break;
      case 'preupload':
        component = <PreUploadModal></PreUploadModal>
        break;
      case 'upload':
        component = <ImageUploadModalContainer></ImageUploadModalContainer>
        break;
      case 'update':
        component = <ImageUpdateModalContainer></ImageUpdateModalContainer>
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.handleClose}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

export default Modal;