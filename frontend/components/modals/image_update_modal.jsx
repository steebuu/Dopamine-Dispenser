import React from 'react';

class ImageUpdateModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      caption: props.image.caption
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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
          </div>
          <div className="image-modal-info-comments-div">
            <form onSubmit={this.handleSubmit} className="image-update-form">
              <div className="caption-input-div">
                <textarea className="caption-input" value={this.state.caption} onChange={this.handleChange("caption")} placeholder="Add Caption..." />
              </div>
              <div className="update-bottom">
                <button className="image-update-button">
                  <i className="fas fa-edit"></i>
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