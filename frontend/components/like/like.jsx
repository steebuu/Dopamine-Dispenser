import React, { Component } from 'react'

export default class Like extends Component {
    constructor(props){
        super(props)

        this.handleLike = this.handleLike.bind(this)
    }

    handleLike(e) {
        e.preventDefault();

        
    }

    render() {
        const {imageId, currentUser} = this.props;
        let buttonClass;
        
        if (currentUser.liked_image_ids[imageId]) {
            buttonClass = "liked"
        } else {
            buttonClass = "unliked"
        }

        return (
            <button className={buttonClass} onClick={this.handleLike}></button>
        )
    }
}
