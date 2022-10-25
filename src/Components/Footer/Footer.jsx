import React from "react";
import {
  FbIcon,
  InstaIcon,
  Logo,
  TwitterIcon,
} from "../../Images/HeaderImages/HeaderSVG";
import GetInTouch from "../GetInTouch/GetInTouch";
import "./Footer.sass";

const Footer = () => {
  return (
    <div className="Footer" id="block4">
      <div className="FooterMap">
        <iframe
          title="map"
          width={"100%"}
          height="700"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=monticello,%20kentucky&t=&z=11&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
      <div className="GetInTouchContainer">
        <GetInTouch />
      </div>
      <div className="FooterEnd">
        <div className="FooterEndNavigation">
          <div className="FooterEndNavigationLogo">{Logo}</div>
          <div className="FooterEndNavigationSocialsBlock">
            <div className="SocialsItem">{FbIcon}</div>
            <div className="SocialsItem">{TwitterIcon}</div>
            <div className="SocialsItem">{InstaIcon}</div>
          </div>
        </div>
        <div className="FooterEndCopyright">
          <p>Copyrights © 2020 Montichello</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
