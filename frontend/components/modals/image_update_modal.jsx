import React from 'react';
import { openModal } from '../../actions/modal_actions';

class ImageUpdateModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      caption: this.props.image.caption,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    const {updateImage, openModal, image} = this.props;
    const newImage = {id: image.id, caption: this.state.caption};
    
    updateImage(newImage);
    openModal("image");
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleBack() {
    this.props.openModal("image");
  }

  render() {
    const { user, image } = this.props;
    
    return (
      <div className="image-modal">
        <div className="image-modal-picture-div-holder">
          <div className="image-modal-picture-div">
            <img src={image.photoUrl} className="modal-picture" />
          </div>
        </div>
        <div className="image-modal-info-div">
          <div className="image-modal-info-user-div">
            <div className="image-modal-profile-pic-div">
              <img src={window.profilePic} className="modal-prof-pic" />
            </div>
            <div className="image-modal-username-div">
              {user.username}
            </div>
            <div className="image-modal-user-actions-div">
              <i className="fas fa-backspace image-modal-user-actions" onClick={this.handleBack}></i>
            </div>
          </div>
          <div className="image-modal-info-comments-div">
            <form onSubmit={this.handleSubmit} className="image-update-form">
              <div className="caption-input-div">
                <textarea className="caption-input" value={this.state.caption} onChange={this.handleChange("caption")} placeholder="Add Caption..." />
              </div>
              <div className="update-bottom">
                <button className="image-update-button">
                  <p className="update-message">Update</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageUpdateModal;