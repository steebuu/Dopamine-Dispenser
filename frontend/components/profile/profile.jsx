import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ImageIndexContainer from '../feed/image_index_container';
import ImageUploadContainer from './image_upload_container';
import { Link, Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';
import {isEmpty} from 'lodash';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.cogComponent = this.cogComponent.bind(this);
  }

  componentDidMount(){
    const {userId, getUser } = this.props;
    getUser(userId);
  }

  componentDidUpdate(prevProps){
    const { userId, getUser, users } = this.props;
    if (users[userId] === undefined || prevProps.match.params.userId !== this.props.match.params.userId) {
      getUser(userId);
    }
  }

  cogComponent(){
    const {openModal, userId} = this.props;
    return(
      <div className="profile-current-user-div">
        <Link to={`/edit/${userId}`}>
          <button className="profile-action-button">Edit Profile</button>
        </Link>
        <i className="fas fa-cog" onClick={() => { openModal('profile') }}></i>
      </div>
    )
  }

  render(){
    const {openModal, currentUserId} = this.props;
    const user = this.props.user || {};
    let cogComponent;

    if (!isEmpty(user) && currentUserId === user.id) {
      cogComponent = this.cogComponent()
    } else {
      cogComponent = null;
    }

    let propic;
    if (!user.propicUrl) {
      propic = window.propic
    } else (
      propic = user.propicUrl
    )

    let followerCount = 0;
    if (user.follower_ids) {
      followerCount = user.follower_ids.length
    }

    let followedCount = 0;
    if (user.followed_ids) {
      followedCount = user.followed_ids.length
    }

    let postCount = 0;
    if (user.image_ids) {
      postCount = user.image_ids.length
    }

    return(
      <main className="profile-main">
        <NavBarContainer/>
        <div className="profile-div">
          <div className="profile-summary-div">
            <div className="profile-pic-div">
              <div className="profile-pic-holder">
                <img src={propic} alt="" className="profile-pic"/>
              </div>
            </div>
            <div className="profile-summary-info-div">
              <div className="info-username-div">
                <h1 className="profile-username">{user.username}</h1>
                {cogComponent}
              </div>
              <div className="info-stats-div">
                <ul className="info-stats-ul">
                  <li className="stat-element">{postCount} posts</li>
                  <li className="stat-element">{followerCount} followers</li>
                  <li className="stat-element">{followedCount} following</li>
                </ul>
              </div>
              <div className="info-bio-div">
                <h1 className="bio-fullname-h1">{user.full_name}</h1>
                <div className="bio-text-div">
                  <span className="user-bio-span">{user.bio}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-feed">
            <ImageIndexContainer></ImageIndexContainer>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile;