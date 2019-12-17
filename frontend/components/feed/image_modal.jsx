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
          <div className="image-modal-info-comments-div">
            <div className="inner-comments-div">
              <div className="image-modal-profile-pic-div">
                <img src={window.profilePic} className="modal-prof-pic" />
              </div>
              <div className="image-modal-username-div">
                {user.username}
              </div>
              <span className="caption-comment-span">
                {image.caption}
              </span>
            </div>
          </div>
          <div className="image-modal-info-actions-div">
            <div className="image-modal-icons-div">
              <i class="far fa-heart modal-icon"></i>
              <i class="far fa-comment modal-icon"></i>
            </div>
            <div className="image-modal-likes-div">10 Likes</div>
            <div className="image-modal-timestamp-div">2 Days</div>  
          </div>
          <div className="image-modal-comment-div">
            <input type="text" className="comment-input" placeholder="Add a comment..." />
            <button>Post</button>
          </div>
        </div>
      </div>
    )
  }
}



export default ImageModal;