import React from 'react';
import {withRouter} from 'react-router-dom';

class ImageUploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      photoFile: this.props.file,
      photoUrl: this.props.photoUrl
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image[caption]', this.state.caption);
    formData.append('image[user_id]', this.props.userId);
    if (this.state.photoFile) {
      formData.append('image[photo]', this.state.photoFile);
    }
    this.props.createImage(formData);
    this.props.closeModal();
    this.props.history.push(`/users/${this.props.userId}`)
  }

  render() {
    const { currentUser } = this.props;
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="modal-picture"/> : null;
    let propic;
    if (!currentUser.propicUrl) {
      propic = "/images/igprofilepic.png";
    } else {
      propic = currentUser.propicUrl;
    }
    return (
      <div className="image-modal">
        <div className="image-modal-picture-div-holder">
          <div className="image-modal-picture-div">
            {preview}
          </div>
        </div>
        <div className="image-modal-info-div">
          <div className="image-modal-info-user-div">
            <div className="image-modal-profile-pic-div">
              <img src={propic} className="modal-prof-pic" />
            </div>
            <div className="image-modal-username-div">
              {currentUser.username}
            </div>
          </div>
          <div className="image-modal-info-comments-div">
            <form onSubmit={this.handleSubmit} className="image-upload-form">
              <div className="caption-input-div">
                <textarea className="caption-input" value={this.state.caption} onChange={this.handleChange("caption")} placeholder="Add Caption..."/>
              </div>
              <div className="upload-bottom">
                <label htmlFor="image-upload" className="image-upload-input">
                  <i className="fas fa-camera-retro image-upload-icon"></i>
                  <p className="image-upload-message">Or Choose Another</p>
                  <input id="image-upload" className="image-upload" type="file" onChange={this.handleFile} />
                </label>
                <button className="image-upload-button">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageUploadModal;