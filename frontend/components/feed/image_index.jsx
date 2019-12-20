import React from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import {isEmpty} from 'lodash';

class ImageIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchImages();
  }

  componentDidUpdate(prevProps) {
    const { userId, fetchImages, users } = this.props;
    if (users[userId] === undefined || prevProps.match.params.userId !== this.props.match.params.userId) {
      fetchImages();
    }
  }

  render(){
    const { openModal, images, userId, user } = this.props;
    let FeedImages;
    if (!user) {
      return null;
    } else if (!user.image_ids) {
      return null;
    } else if (!images[user.image_ids[0]]) {
      return null;
    }
    
   
    // if (!images){
    //   return null;
    // }
    const image_ids = user.image_ids;
    if (image_ids.length > 0) {
      let reversed = [...image_ids].reverse();
      FeedImages = reversed.map(id => {
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