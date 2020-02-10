import React, { Component } from 'react'
import {connect} from 'react-redux';

class FeedImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger;
        const {images, id} = this.props;
        const image = images[id];
        return (
            <div className="main-feed-image-div">
                <div className="main-feed-image-header">{image.user}</div>
                <img src={images[id].photoUrl} className="main-feed-img"></img>
                <div className="main-feed-image-bottom">{image.caption}</div>
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