import React, { Component } from 'react'

export default class CommentIndexItem extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const {comment} = this.props;

        return (
            <div className="comment">
               <div className="comment-username">{comment.user}</div>
               <div className="comment-body">{comment.body}</div>         
            </div>
        )
    }
}
