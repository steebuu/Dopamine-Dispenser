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
                <img key={id} src={images[id].photoUrl}></img>
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
