import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class CommentIndexItem extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const {comment, users, classType} = this.props;
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
        let propicLink;
        if (classType = "modal") {
            propicLink = <Link to={`/users/${user.id}`} className="comment-pic-link">
                <img src={propic} className="comment-prof-pic" />
            </Link>
        }
        return (
            <div className="comment">
                <Link to={`/users/${user.id}`} className="comment-pic-link">
                    <img src={propic} className="comment-prof-pic" />
                </Link>
                <span className="comment-text">
                    <Link to={`/users/${user.id}`} className="comment-username">
                        {user.username}
                    </Link>
                    {comment.body}        
                </span>
            </div>
        )
    }
}
