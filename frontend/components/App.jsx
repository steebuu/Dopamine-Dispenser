import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Footer from './footer';
import SplashContainer from './splash_container';
import ProfileContainer from './profile/profile_container';
import ModalContainer from './modal_container';
import UpdateUser from '../userauth/update_user';

class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    // const {currentUser} = this.props.currentUser;
    return (
      <section className="app">
        <Route path="/users/:userId/images/:imageId" component={ModalContainer}/>
        <Route exact path="/users/:userId" component={ModalContainer}/>
        <Switch>
          <Route path="/edit" component={UpdateUser}/>
          <Route path="/users/:userId" component={ProfileContainer}/>
          <AuthRoute path="/signup" component={SplashContainer}/>
          <AuthRoute path="/login" component={SplashContainer}/>
          <Route path="/" component={SplashContainer}/>
        </Switch>
        <Footer/> 
      </section>
    )
  }

};

export default App;