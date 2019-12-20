import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ImageIndexContainer from '../feed/image_index_container';
import ImageUploadContainer from './image_upload_container';
import { Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';
import {isEmpty} from 'lodash';

class Profile extends React.Component {
  constructor(props){
    super(props);

    this.cogComponent = this.cogComponent.bind(this);
  }

  componentDidMount(){
    const {user, getUser, match} = this.props;
    getUser(match.params.userId);
  }

  cogComponent(){
    const {openModal} = this.props;
    return(
      <div className="profile-current-user-div">
        <button className="profile-action-button">Edit Profile</button>
        <i className="fas fa-cog" onClick={() => { openModal('profile') }}></i>
      </div>
    )
  }

  render(){
    const {openModal, currentUserId} = this.props;
    const user = this.props.user || {};
    let cogComponent = null;

    if (!isEmpty(user) && currentUserId === user.id) {
      cogComponent = this.cogComponent()
    }

    return(
      <main className="profile-main">
        <NavBarContainer/>
        <div className="profile-div">
          <div className="profile-summary-div">
            <div className="profile-pic-div">
              <div className="profile-pic-holder">
                <img src={user.propicUrl} alt="" className="profile-pic"/>
              </div>
            </div>
            <div className="profile-summary-info-div">
              <div className="info-username-div">
                <h1 className="profile-username">{user.username}</h1>
                {cogComponent}
              </div>
              <div className="info-stats-div">
                <ul className="info-stats-ul">
                  <li className="stat-element">0 posts</li>
                  <li className="stat-element">0 followers</li>
                  <li className="stat-element">0 following</li>
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