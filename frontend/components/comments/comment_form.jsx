import React, { Component } from 'react'

export default class CommentForm extends Component {
    constructor(props){
        super(props)
        const {user_id, image_id} = this.props;
        this.state = {
            body: "",
            user_id: user_id,
            image_id: image_id,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {addComment} = this.props;
        const comment = Object.assign({}, this.state);
        addComment(comment);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        }
    }

    render() {
        return (
            <form className="main-feed-comment-div" onSubmit={this.handleSubmit}>
                <input type="text" className="comment-input" placeholder="Comments coming soon" value={this.state.body} onChange={this.handleChange}/>
                <button className="post-comment-button">Post</button>
            </form>
        )
    }
}
