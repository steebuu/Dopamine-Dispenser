import React from 'react';
import { openModal } from '../../actions/modal_actions';

class ImageIndex extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.fetchImages();
  // }

  render(){
    const {openModal, images, users} = this.props;
    let FeedImages;
    const user = this.props.user || {};
    const image_ids = user.image_ids;
    if (!user){
      return null;
    } else if (!image_ids) {
      return null;
    }
    if (image_ids.length > 0){
      debugger;
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