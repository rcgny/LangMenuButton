import React from "react";
import "./styles.css";
import Myimage from '/src/images/language-icon.svg';
 
const LanguageIcon = () =><img src={Myimage} alt="Lang Icon" />;



const handleSubmit = () => {
 // change(state);
 // setState(initialValues);
 // Todo: Add real data for language menu
 alert('You clicked me!');
};
  
const LangMenuButton =  () => {
  return(
     <div className="button" id="language-selector" onClick={handleSubmit}>           
          <LanguageIcon/>  
     </div>
  );
};

export default LangMenuButton;