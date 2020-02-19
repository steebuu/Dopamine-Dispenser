import React, { Component } from 'react'
import CommentIndexItem from './comment_index_item';

export default class CommentsIndex extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const { getAllComments } = this.props;
        getAllComments();    
    }
    
    render() {
        const {comment_ids, comments} = this.props;
        let commentLis;
        if (comment_ids.length > 0) {
            commentLis = comment_ids.map((id, i) => {
                return(
                    <CommentIndexItem comment={comments[id]} key={i}/>
                )
            })
        }

        return (
            <div className="comments-index">
                {commentLis}
            </div>
        )
    }
}
