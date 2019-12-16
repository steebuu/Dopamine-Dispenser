import React from 'react';

class ImageUpload extends React.Component {
  constructor(props){
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

  handleFile(e){
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

  handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('image[caption]', this.state.caption);
    formData.append('image[user_id]', this.props.currentUser.id);
    if (this.state.photoFile){
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

  render(){
    return(
      <form className="image-upload-form" onSubmit={this.handleSubmit}>
        <input type="text" className="caption-input" value={this.state.caption} onChange={this.handleChange("caption")} placeholder="caption"/>
        <input type="file" onChange={this.handleFile}/>
        <button className="upload-image-button">Upload Image</button>
      </form>
    )
  }
}

export default ImageUpload;