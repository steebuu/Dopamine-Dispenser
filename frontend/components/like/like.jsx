import React, { Component } from 'react'

export default class Like extends Component {
    constructor(props){
        super(props)

        this.handleLike = this.handleLike.bind(this)
    }

    handleLike(e) {
        e.preventDefault();

        const { imageId, currentUser, unlikeImage, likeImage, images } = this.props;
        const image = images[imageId];

        if (currentUser.liked_image_ids[imageId]) {
            unlikeImage(currentUser.liked_image_ids[imageId])
        } else {
            likeImage({ user_id: currentUser.id, image_id: image.id })
        }
    }

    render() {
        const {images, imageId, currentUser} = this.props;
        const image = images[imageId];
        
        let buttonClass;
        
        if (currentUser.liked_image_ids[image.id]) {
            buttonClass = "liked"
        } else {
            buttonClass = "unliked"
        }

        return (
            <button className={buttonClass} onClick={this.handleLike}>
                <i className="far fa-heart modal-icon"></i>
            </button>
        )
    }
}
