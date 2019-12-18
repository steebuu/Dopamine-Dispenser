import React from 'react';
import {withRouter} from 'react-router-dom';

class ImageUploadModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      photoFile: null,
      photoUrl: null
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
    formData.append('image[user_id]', this.props.currentUser.id);
    if (this.state.photoFile) {
      formData.append('image[photo]', this.state.photoFile);
    }
    $.ajax({
      url: '/api/images',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
        console.log(response.responseJSON);
      }
    );
  }

  render() {
    const { user } = this.props;
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} className="modal-picture"/> : null;
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
              <img src={window.profilePic} className="modal-prof-pic" />
            </div>
            <div className="image-modal-username-div">
              {user.username}
            </div>
          </div>
          <div className="image-modal-info-comments-div">
            <form onSubmit={this.handleSubmit} className="image-upload-form">
              <input type="textarea" className="caption-input" value={this.state.caption} onChange={this.handleChange("caption")} placeholder="Add Caption..."/>
              <div className="upload-bottom">
                <input type="file" onChange={this.handleFile} />
                <button className="image-upload-button"></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageUploadModal;