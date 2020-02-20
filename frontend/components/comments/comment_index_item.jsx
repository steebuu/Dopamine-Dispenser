import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CommentIndexItem extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const {comment, users} = this.props;
        if (!comment || !comment.user || !comment.body) {
            return null;
        }
        const user = users[comment.user_id];
        let propic;
        if (!user.propicUrl) {
            propic = window.propic
        } else (
            propic = user.propicUrl
        )
        return (
            <div className="comment">
                <div className="image-modal-info-user-div">
                    <Link to={`/users/${user.id}`} className="name-link">
                        <div className="comment-prof-pic-div">
                            <img src={propic} className="comment-prof-pic" />
                        </div>
                        <div className="comment-username-div">
                            {user.username}
                        </div>
                    </Link>
                </div>
               {/* <div className="main-feed-caption-username">{comment.user}</div> */}
               <div className="comment-body">{comment.body}</div>         
            </div>
        )
    }
}
