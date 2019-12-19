import React from 'react';
import {Link} from 'react-router-dom';

class ImageModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      optionModalType: "closed"
    };

    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleUserAction = this.handleUserAction.bind(this);
    this.optionModal = this.optionModal.bind(this);
  }

  optionModal(){
    const {optionModalType} = this.state;
    if (optionModalType === "closed"){
      return null;
    } else {
      return (
        <div className="modal-background" onClick={this.setState({optionModalType: "closed"})}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            <div className="profile-modal">
              <div className="profile-modal-option">
                <button className="profile-modal-button" onClick={() => this.props.openModal("update")}>Edit Caption</button>
              </div>
              <div className="profile-modal-option">
                <button className="profile-modal-button" onClick={() => this.handleLogout()}>Delete Post</button>
              </div>
              <div className="profile-modal-option">
                <button className="profile-modal-button" onClick={() => this.setState({optionModalType: "closed"})}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  handleUserAction(){
    this.setState({optionModalType: "open"});
  }

  handleLeft(){
    const { image, image_ids } = this.props;
    const imageId = image.id;
    const currentIndex = image_ids.indexOf(imageId);
    const prevId = image_ids[currentIndex - 1];
    if (currentIndex > 0){
      return prevId;
    } else {
      return imageId;
    }
  }

  handleRight(){
    const { image, image_ids } = this.props;
    const imageId = image.id;
    const currentIndex = image_ids.indexOf(imageId);
    const nextId = image_ids[currentIndex + 1];
    if (currentIndex < image_ids.length - 1) {
      return nextId;
    } else {
      return imageId;
    }
  }

  render(){
    const {user, image, modal, image_ids} = this.props;
    return(
      <div className="image-modal">
        <Link to={`${this.handleLeft()}`} className="modal-arrow">
          <i className="fas fa-chevron-left modal-arrow"></i>
        </Link>
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
            <div className="image-modal-user-actions-div">
              <i className="fas fa-ellipsis-h image-modal-user-actions" onClick={this.handleUserAction}></i>
            </div>
          </div>
          <div className="image-modal-info-comments-div">
            <div className="inner-comments-div">
              <div className="image-modal-profile-pic-div">
                <img src={window.profilePic} className="modal-prof-pic" />
              </div>
              <div className="image-modal-username-comment-div">
                <div className="image-modal-username-div">
                  {user.username}
                </div>
                <span className="caption-comment-span">
                  {image.caption}
                </span>
              </div>
            </div>
          </div>
          <div className="image-modal-info-actions-div">
            <div className="image-modal-icons-div">
              <i className="far fa-heart modal-icon"></i>
              <i className="far fa-comment modal-icon"></i>
            </div>
            <div className="image-modal-likes-div">10 likes</div>
            <div className="image-modal-timestamp-div">2 DAYS AGO</div>  
          </div>
          <div className="image-modal-comment-div">
            <input type="text" className="comment-input" placeholder="Add a comment..." />
            <button className="post-comment-button">Post</button>
          </div>
        </div>
        <Link to={`${this.handleRight()}`} className="modal-arrow">
          <i className="fas fa-chevron-right modal-arrow"></i>
        </Link>
      </div>
    )
  }
}



export default ImageModal;