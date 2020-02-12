import React, { Component } from 'react'
import {connect} from 'react-redux';

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
            case (time > 604800):
                timeSince = Math.floor(time/(60*24*7)) + " DAYS AGO"
                break;
            default:
                timeSince = createdAt.toLocaleString('default', {month: 'long'}).toUpperCase() + " " + createdAt.getDate();
        }
        Math.floor(timeBetween / (1000 * 3600 * 24));    
        return (
            <div className="main-feed-image-div">
                <div className="main-feed-image-header">
                    <div className="main-feed-profile-pic">
                        <img src={propic} className="modal-prof-pic"/>
                    </div>
                    {image.user}
                </div>
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
                    <div className="main-feed-timestamp">{timeSince}</div>
                    <div className="main-feed-comment-div">
                        <input type="text" className="comment-input" placeholder="Add a comment..." />
                        <button className="post-comment-button">Post</button>
                    </div>
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