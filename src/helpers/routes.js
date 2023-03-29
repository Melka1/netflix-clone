import React from "react";
import { redirect, Route, Routes } from "react-router-dom";

export function IsUserRedirect({user, loggedInPath, children, ...restProps}){
    console.log(user)
    return (
        
            <Route 
                {...restProps}
                render={()=>{
                    if(!user){
                        return children;
                    } else {
                        <redirect 
                            to={{pathname:loggedInPath}}
                        />
                    }
                    return null
                }}
                
            />
    )
}

export function ProtectedRoute({ user, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          if (user) {
            return children;
          }
  
          if (!user) {
            return (
              <redirect
                to={{
                  pathname: 'signin',
                  state: { from: location },
                }}
              />
            );
          }
  
          return null;
        }}
      />
    );
  }
//understand more about react router