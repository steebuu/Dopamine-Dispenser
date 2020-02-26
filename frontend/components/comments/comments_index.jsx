import React, { Component } from 'react'
import CommentIndexItemContainer from './comment_index_item_container';

export default class CommentsIndex extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const { getAllComments } = this.props;
        getAllComments();    
    }
    
    render() {
        const {comment_ids, comments, classType} = this.props;
        let commentLis;
        if (comment_ids.length > 0) {
            commentLis = comment_ids.map((id, i) => {
                return(
                    <CommentIndexItemContainer comment={comments[id]} key={i} classType={classType}/>
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
