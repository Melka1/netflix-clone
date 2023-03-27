import React from "react";
import {Routes, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {Home, Browse, Signin, Signup} from "./pages";
import * as ROUTES from './constants/routes'

export default function App(){
  return (
  <Router>
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home/>} />
      <Route exact path={ROUTES.SIGN_IN} element={<Signin/>}/>
      <Route exact path={ROUTES.SIGN_UP} element={<Signup/>}/>
      <Route exact path={ROUTES.BROWSE} element={<Browse/>}/>
    </Routes>
  </Router>
  );
}
