import React, { Component } from 'react'

export default class MainFeed extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const {currentUser, getCurrentUser} = this.props;
        getCurrentUser(currentUser.id);
    }
    
    render() {
        const {images} = this.props;
        let feed;
        if (Object.keys(images).length > 0) {
            let reversed = Object.keys(images).reverse();
            feed = reversed.map(id => {
               return (
                <div key={id} className="main-feed-image-div">
                    <img src={images[id].photoUrl} className="main-feed-img"></img>
                </div>    
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
