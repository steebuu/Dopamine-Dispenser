import React, { Component } from 'react'
import FeedImage from './feed_image';

export default class MainFeed extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const {currentUser, getCurrentUser, getAllUsers} = this.props;
        getCurrentUser(currentUser.id);
        getAllUsers();
    }
    
    render() {
        const {images} = this.props;
        let feed;
        if (Object.keys(images).length > 0) {
            let reversed = Object.keys(images).reverse();
            feed = reversed.map(id => {
               return (
                <FeedImage key={id} id={id}></FeedImage>   
               ) 
            })
        }

        return (
            <div className="main-feed-div">
                {feed}
            </div>
        )
    }
}
