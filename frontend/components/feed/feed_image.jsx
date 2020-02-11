import React, { Component } from 'react'
import {connect} from 'react-redux';

class FeedImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {images, id} = this.props;
        const image = images[id];
        return (
            <div className="main-feed-image-div">
                <div className="main-feed-image-header">{image.user}</div>
                <img src={images[id].photoUrl} className="main-feed-img"></img>
                <div className="main-feed-image-bottom">
                    <div className="main-feed-image-bottom-actions">
                        <i className="far fa-heart modal-icon"></i>
                        <i className="far fa-comment modal-icon"></i>
                    </div>
                    <div className="main-feed-image-likes">5 likes</div>
                    <div className="main-feed-caption">
                        <div className="main-feed-caption-username">{image.user}</div>
                        {image.caption}
                    </div>
                    <div className="main-feed-image-date"></div>
                    <div className="main-feed-image-comment"></div>
                </div>
            </div>  
        )
    }
}

const msp = (state, ownProps) => {
    const {images} = state.entities;
    return {
        images
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(FeedImage);