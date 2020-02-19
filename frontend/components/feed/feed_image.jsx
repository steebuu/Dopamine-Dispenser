import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import LikeContainer from '../like/like_container';
import CommentIndexContainer from '../comments/comments_index_container';
import CommentFormContainer from '../comments/comment_form_container';

class FeedImage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {images, id, users} = this.props;
        const image = images[id];
        if (!image) {
            return null;
        }
        const user = users[image.user_id]
        if (!user) {
            return null;
        }
        let propic;
        if (!user.propicUrl) {
            propic = window.propic
        } else (
            propic = user.propicUrl
        )
        let timeSince;
        const currentTime = new Date();
        const createdAt = new Date(image.created_at);
        const timeBetween = currentTime.getTime() - createdAt.getTime();
        const time = Math.floor(timeBetween / 1000);
        switch (true) {
            case (time < 60):
                timeSince = time + " SECONDS AGO"
                break;
            case (time < 3600):
                timeSince = Math.floor(time/60) + " MINUTES AGO"
                break;
            case (time < 86400):
                timeSince = Math.floor(time/(60*24)) + " HOURS AGO"
                break;
            case (time < 604800):
                timeSince = Math.floor(time/(60*24*7)) + " DAYS AGO"
                break;
            default:
                timeSince = createdAt.toLocaleString('default', {month: 'long'}).toUpperCase() + " " + createdAt.getDate();
        }
        Math.floor(timeBetween / (1000 * 3600 * 24));
        let likeCount = Object.keys(image.liked_by_ids).length
        let likeMessage;
        switch(true) {
            case (likeCount === 0):
                likeMessage = "Be the first to like this"
                break;
            case (likeCount === 1):
                likeMessage = "1 like"
                break;
            default:
                likeMessage = likeCount + " likes"
        }  
        return (
            <div className="main-feed-image-div">
                <div className="main-feed-image-header">
                    <Link to={`/users/${image.user_id}`} className="name-link">
                        <div className="main-feed-profile-pic">
                            <img src={propic} className="modal-prof-pic"/>
                        </div>
                        {image.user}
                    </Link>
                </div>
                <img src={images[id].photoUrl} className="main-feed-img"></img>
                <div className="main-feed-image-bottom">
                    <div className="main-feed-image-bottom-actions">
                        <LikeContainer imageId={image.id}></LikeContainer>
                        <i className="far fa-comment modal-icon"></i>
                    </div>
                    <div className="main-feed-image-likes">{likeMessage}</div>
                    <div className="main-feed-caption">
                        <div className="main-feed-caption-username">{image.user}</div>
                        {image.caption}
                    </div>
                    <CommentIndexContainer comment_ids={image.comment_ids}/>
                    <div className="main-feed-timestamp">{timeSince}</div>
                    <CommentFormContainer image_id={image.id}/>
                </div>
            </div>  
        )
    }
}

const msp = (state, ownProps) => {
    const {images, users} = state.entities;
    return {
        images,
        users
    }
}

const mdp = dispatch => {
    return {

    }
}

export default connect(msp, mdp)(FeedImage);