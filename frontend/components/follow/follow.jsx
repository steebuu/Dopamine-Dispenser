import React, { Component } from 'react'

export default class Follow extends Component {
    constructor(props){
        super(props);

        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(e) {
        e.preventDefault();

        const { currentUserId, user, users, followUser, unfollowUser } = this.props;

        if (users[currentUserId].followed_ids[user.id]) {
            unfollowUser(users[currentUserId].followed_ids[user.id])
        } else {
            followUser({ follower_id: currentUserId, followed_id: user.id })
        }
    }

    render() {
        const { currentUserId, user, users } = this.props;
        let followStatus;
        let buttonClass;

        if (users[currentUserId].followed_ids[user.id]) {
            followStatus = "Following"
            buttonClass = "profile-follow following"
        } else {
            followStatus = "Follow"
            buttonClass = "profile-follow nofollow"
        }

        return (
            <button className={buttonClass} onClick={this.handleFollow}>{followStatus}</button>
        )
    }
}


