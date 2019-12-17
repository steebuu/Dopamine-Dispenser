import React from 'react';
import {withRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
class ImageIndex extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.fetchImages();
  // }

  render(){
    const {openImageModal, images, users} = this.props;
    let FeedImages;
    const user = this.props.user || {};
    const image_ids = user.image_ids;
    if (!user){
      return null;
    } else if (!image_ids) {
      return null;
    } else if (!images[image_ids[(image_ids[0])]]) {
      return null;
    }
    
    if (image_ids.length > 0){
      FeedImages = image_ids.map(id => {
        return (
          <div key={id} className="feed-image-div">
              <img src={images[id].photoUrl} className="thumbnail" onClick={()=>{openImageModal('image', id)}}/>
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