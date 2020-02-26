import React, { Component } from 'react'
import FeedImage from './feed_image';

export default class MainFeed extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const {fetchImages, getAllUsers, getAllFollows, getAllComments} = this.props;
        getAllUsers();
        fetchImages();
        getAllFollows();
        getAllComments();
    }
    
    render() {
        const {images, currentUser} = this.props;
        let feed;
        let reversed;
        if (Object.keys(images).length < 1) {
            return null;
        }
        if (currentUser.followed_image_ids.length < 1) {
            reversed = currentUser.image_ids.sort().reverse();
            feed = reversed.map(id => {
               return (
                    <FeedImage key={id} id={id}></FeedImage>   
               ) 
            })
        } else {
            reversed = currentUser.followed_image_ids.sort().reverse();
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
