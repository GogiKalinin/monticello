import React from "react";
import "./GetInTouch.sass";

const GetInTouch = () => {
  return (
    <div className="FooterGetInTouch">
      <div className="GetInTouchTitle">GET IN TOUCH</div>
      <div className="GetInTouchMain">
        <div className="GetInTouchMainInformation">
          <p className="InformationItem"> 91 Nolan Extensions Suite 670 </p>
          <a href="tel:+001 356-868-2454" className="InformationItem">
            +001 356-868-2454
          </a>
          <a href="mailto:montichello@service.com" className="InformationItem">
            montichello@service.com
          </a>
          <p className="InformationItem">From 07:05AM to 19:30PM</p>
        </div>
        <div className="GetInTouchMainRegistration">
          <input className="RegistrationInput" placeholder="Name"></input>
          <input className="RegistrationInput" placeholder="Email"></input>
          <button className="RegistrationButton">submit</button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
