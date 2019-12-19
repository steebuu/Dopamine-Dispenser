import React from 'react';
import {Link, Route, withRouter} from 'react-router-dom';

class ImageIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchImages();
  }

  render(){
    const { openModal, images, userId, user } = this.props;
    let FeedImages;
    const image_ids = user.image_ids;
    // if (!user) {
    //   return null;
    // } else if (!image_ids) {
    //   return null;
    // } else if (!images[image_ids.indexOf((image_ids[0]))]) {
    //   return null;
    // }

    if (!images){
      return null;
    }

    if (image_ids.length > 0) {
      FeedImages = image_ids.map(id => {
        return (
          <div key={id} className="feed-image-div">
            <Link to={`/users/${userId}/images/${id}`} className="index-item-link">
              <img src={images[id].photoUrl} className="thumbnail" onClick={() => { openModal('image') }} />
            </Link>
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