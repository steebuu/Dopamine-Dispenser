import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const {currentUser} = this.props;
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
                <h1 className="profile-username">{currentUser.username}</h1>
                <button className="profile-action-button">Edit Profile</button>
                <i className="fas fa-cog"></i>
              </div>
              <div className="info-stats-div">
                <ul className="info-stats-ul">
                  <li className="stat-element">0 posts</li>
                  <li className="stat-element">0 followers</li>
                  <li className="stat-element">0 following</li>
                </ul>
              </div>
              <span className="info-bio-div">{currentUser.bio}</span>
            </div>
          </div>
          <div className="profile-feed">

          </div>
        </div>
      </main>
    )
  }
}

export default Profile;