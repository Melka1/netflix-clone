import React, {useEffect} from "react";
import { useNavigate, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from "./pages";
import * as ROUTES from './constants/routes';
import useAuthListener from "./hooks/use-auth-listener";


export default function App(){
  
  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to, {replace:true});
    });
    return null;
  }

  const {user} = useAuthListener();
  
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route 
          exact 
          path={ROUTES.HOME} 
          Component={()=>{
            if(!user){
              return (<Home/>);
            } else {
              return <Redirect to={ROUTES.BROWSE}/>
            }
          }}
        />
        <Route 
          exact 
          path={ROUTES.SIGN_IN} 
          Component={()=>{
            if(!user){
              return (<Signin/>);
            } else {
              return <Redirect to={ROUTES.BROWSE}/>;
            }
          }}
        />
        <Route 
          // exact 
          path={ROUTES.SIGN_UP} 
          Component={()=>{
            if(!user){
              return (<Signup/>);
            } else {
              return <Redirect to={ROUTES.BROWSE}/>
            }
          }}
        />
        <Route 
          exact 
          path={ROUTES.BROWSE} 
          Component={() => {
            if(user){
              return (<Browse/>);
            }
            if(!user){
              return <Redirect to={ROUTES.SIGN_IN}/>
            }
          }}
        />
      </Routes>
    </Router>
  );
}