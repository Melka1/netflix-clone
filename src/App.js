import React from "react";
import {Routes, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import JumbotronContainer from "./containers/jumbotron";
import FooterContainer from "./containers/footer"
import FaqsAccordion from "./containers/faqs";
import * as ROUTES from './constants/routes'

export default function App(){
  return (
  <Router>
    <Routes>
      <Route path='/' element={
        <>
          <JumbotronContainer />
          <FaqsAccordion />  
          <FooterContainer />
        </>
      } />
    </Routes>
  </Router>
  );
}
