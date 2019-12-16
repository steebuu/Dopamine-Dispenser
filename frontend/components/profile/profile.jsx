import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import ImageIndexContainer from '../feed/image_index_container';
import ImageUploadContainer from './image_upload_container';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {user, getUser, match} = this.props;
      getUser(match.params.id);
  }

  render(){
    const {openModal} = this.props;
    const user = this.props.user || {};
    // debugger;
    return(
      <main className="profile-main">
        <NavBarContainer/>
        <div className="profile-div">
          <div className="profile-summary-div">
            <div className="profile-pic-div">
              <div className="profile-pic-holder">
                <img src={window.profilePic} alt="" className="profile-pic"/>
              </div>
            </div>
            <div className="profile-summary-info-div">
              <div className="info-username-div">
                <h1 className="profile-username">{user.username}</h1>
                <button className="profile-action-button">Edit Profile</button>
                <i className="fas fa-cog" onClick={()=>{openModal('profile')}}></i>
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
            <ImageUploadContainer/>
            <ImageIndexContainer></ImageIndexContainer>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile;