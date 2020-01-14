import React from "react";
import SignInFormContainer from './components/session_form/sign_in_container'
import { AuthRoute, ProtectedRoute } from './util/route_util';
import SplashPage from './components/splash'
import SplashPageContainer from './components/splash_container'
import WorkSpaceFormContainer from './components/session_form/workspace_form_container'
import SignUpFormContainer from './components/session_form/sign_up_form_container'
import MainContainer from './components/main/main_container'
import SideBarContainer from './components/main/side_bar_container'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
const App = () => (
  <div id="app-div">
    <Switch>
      {/* <Route exact path="/" component={SplashPageContainer}/> */}
      <AuthRoute exact path="/session/new" component={WorkSpaceFormContainer}/>
      <AuthRoute exact path="/session/workspace/new" component={SignInFormContainer}/>
      {/* <AuthRoute exact path="/session/:workspace_url/new" component={SignInFormContainer}/> */}
      <AuthRoute exact path="/users/new" component={SignUpFormContainer}/>
      <Route path="/test" component={SideBarContainer} />
      <ProtectedRoute path="/messages" component={MainContainer} />
      <ProtectedRoute path="/messages/:channel_id" component={MainContainer} />
      {/* <ProtectedRoute path="/messages/:workspace_id/:channel_id" component={MainContainer} /> */}
      <Route path="/" component={SplashPageContainer}/>
    </Switch>

  </div>
);

export default App;