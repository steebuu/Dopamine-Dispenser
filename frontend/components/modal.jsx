import React from 'react';
import ProfileModal from '../components/profile/profile_modal';
import ImageModalContainer from '../components/feed/image_modal_container';
import {withRouter} from 'react-router-dom';
import ImageUploadModalContainer from './modals/image_upload_modal_container';
import PreUploadModal from './modals/pre_upload_modal';
import ImageUpdateModalContainer from './modals/image_update_modal';

class Modal extends React.Component{
  // ({ modal, closeModal }) {
  // debugger;
  constructor(props){
    super(props);
  }
  render(){
    const {type, closeModal, user, id, file, image} = this.props;
    if (!type) {
      return null;
    }
    let component;
    switch (type) {
      case 'profile':
        component = <ProfileModal></ProfileModal>
        break;
      case 'image':
        component = <ImageModalContainer id={id} file={file}></ImageModalContainer>
        break;
      case 'preupload':
        component = <PreUploadModal></PreUploadModal>
        break;
      case 'upload':
        component = <ImageUploadModalContainer id={id}></ImageUploadModalContainer>
        break;
      case 'update':
        component = <ImageUpdateModalContainer image={image} user={user}></ImageUpdateModalContainer>
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