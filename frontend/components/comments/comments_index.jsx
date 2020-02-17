import React, { Component } from 'react'

export default class CommentsIndex extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const {imageId, getAllComments} = this.props;
        getAllComments(imageId);    
    }
    
    render() {
        const {comments} = this.props;
        let commentLis;
        if (Object.keys(comments).length > 0) {
            commentLis = Object.values(comments).map((comment, i) => {
                return(
                    <CommentIndexItemContainer comment={comment} key={i}/>
                )
            })
        }

        return (
            <div>
                {commentLis}
            </div>
        )
    }
}
