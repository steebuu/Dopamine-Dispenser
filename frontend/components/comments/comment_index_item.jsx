import React, { Component } from 'react'

export default class CommentIndexItem extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const {comment} = this.props;
        if (!comment || !comment.user || !comment.body) {
            return null;
        }
        return (
            <div className="comment">
               <div className="main-feed-caption-username">{comment.user}</div>
               <div className="comment-body">{comment.body}</div>         
            </div>
        )
    }
}
