import React, { Component } from 'react'

export default class Like extends Component {
    constructor(props){
        super(props)

        this.handleLike = this.handleLike.bind(this)
    }

    handleLike(e) {
        e.preventDefault();

        const { image, currentUser, unlikeImage, likeImage } = this.props;

        if (currentUser.liked_image_ids[imageId]) {
            unlikeImage(currentUser.liked_image_ids[imageId.id])
        } else {
            likeImage({ user_id: currentUser.id, image_id: image.id })
        }
    }

    render() {
        const {image, currentUser} = this.props;
        let buttonClass;
        
        if (currentUser.liked_image_ids[image.id]) {
            buttonClass = "liked"
        } else {
            buttonClass = "unliked"
        }

        return (
            <button className={buttonClass} onClick={this.handleLike}></button>
        )
    }
}
