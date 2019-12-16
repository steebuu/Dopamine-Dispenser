import React from 'react';
import { openModal } from '../../actions/modal_actions';

class ImageIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchImages();
  }

  render(){
    const {openModal, images, image_ids} = this.props;
    let FeedImages;
    if (image_ids.length > 0){
      FeedImages = image_ids.map(id => {
        return (
          <div key={id} className="feed-image-div">
            <img src={images[id].photoUrl} className="thumbnail" onClick={()=>{openModal('image')}}/>
          </div>
        )
      })
    }

    return(
      <div className="feed-div">
        {FeedImages}
      </div>
    )
  }
}

export default ImageIndex;