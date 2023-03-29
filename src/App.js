import React from "react";
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import {Home, Browse, Signin, Signup} from "./pages";
import * as ROUTES from './constants/routes'
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/use-auth-listener";

export default function App(){

  const {user} = useAuthListener();
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route user={user} exact path={ROUTES.HOME} element={<Home/>} />
        <Route user={user} exact path={ROUTES.SIGN_IN} element={<Signin/>}/>
        <Route user={user} exact path={ROUTES.SIGN_UP} element={<Signup/>}/>
        <Route user={user} exact path={ROUTES.BROWSE} element={<Browse/>}/>
      </Routes>
    </Router>
  );
}

{/* <IsUserRedirect
  exact
  user={user} 
  loggedInPath={ROUTES.BROWSE}
  path={ROUTES.SIGN_UP}
  >
  <Signup />
</IsUserRedirect> */}
