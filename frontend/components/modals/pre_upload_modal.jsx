import React from 'react';
import {connect} from 'react-redux';
import {openModal} from '../../actions/modal_actions';

class PreUploadModal extends React.Component{
  constructor(props){
    super(props);

    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.props.openModal("upload", file, reader.result);
    };
    if (file){
      reader.readAsDataURL(file); 
    } else {
      console.log("error in pre upload modal");
    } 
    
  }

  render(){
    return(
      <div className="pre-upload-div">
        <input id="pre-upload-input" type="file" className="pre-upload-input" onChange={this.handleFile}></input>
        <label htmlFor="pre-upload-input" className="pre-upload-input-label">
          <i className="fas fa-camera-retro pre-upload-icon"></i>
          <p className="pre-upload-message"> The clout you crave is but an upload away. </p>
        </label>
      </div>
    )
  }
}

const msp = state => {
  return {

  }
}

const mdp = state => {
  return {
    openModal: (modal, file, photoUrl) => {dispatch(openModal(modal, file, photoUrl))}
  }
}

export default connect(null, mdp)(PreUploadModal);