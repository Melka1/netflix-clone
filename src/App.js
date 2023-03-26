import React from "react";
import {JumbotronContainer} from "./containers/jumbotron";
import FooterContainer from "./containers/footer"
import FaqsAccordion from "./containers/faqs";

export default function App(){
  return (
  <>
    <JumbotronContainer />
    <FaqsAccordion />  
    <FooterContainer />
  </>
  );
}
