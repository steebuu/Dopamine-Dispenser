import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

class ImageModal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {user, image} = this.props;
    return(
      <div className="image-modal">
        <div className="image-modal-picture-div-holder">
          <div className="image-modal-picture-div"><img src={image.photoUrl} className="modal-picture" /></div>
        </div>
        <div className="image-modal-info-div">
          <div className="image-modal-info-user-div">
            <div className="image-modal-profile-pic-div">
              <img src={window.profilePic} className="modal-prof-pic"/>
            </div>
            <div className="image-modal-username-div">
              {user.username}
            </div>
          </div>
          <div className="image-modal-info-comments-div">{image.caption}</div>
          <div className="image-modal-info-actions-div">actions here</div>
        </div>
      </div>
    )
  }
}



export default ImageModal;