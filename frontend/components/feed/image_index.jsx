import React from 'react';

class ImageIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      images: []
    };
    this.fetchImages = this.fetchImages.bind(this);
  }

  fetchImages() {
    return (
      $.ajax({
        method: "GET",
        url: "/api/images"
      }).then(images => {
        this.setState({ images });
      })
    );
  }

  componentDidMount(){
    this.fetchImages();
  }

  render(){
    let FeedImages = "";
    if (this.state.images.length > 0){
      FeedImages = this.state.images.map(image => {
        return (
          <div key={image.id} className="feed-image-div">
            <img src={image.photoUrl} className="thumbnail" />
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