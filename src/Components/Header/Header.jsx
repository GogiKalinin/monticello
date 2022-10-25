import React from "react";
import {
  FbIcon,
  InstaIcon,
  Logo,
  TwitterIcon,
} from "../../Images/HeaderImages/HeaderSVG";
import "./Header.sass";

const Header = () => {
  return (
    <div className="Header">
      <div className="HeaderNavigation">
        <div className="HeaderNavigationLogo">{Logo}</div>
        <div className="HeaderNavigationNavBlock">
          <a href="#block1" className="NavBlockItem">
            About us
          </a>
          <a href="#block2" className="NavBlockItem">
            Projects
          </a>
          <a href="#block3" className="NavBlockItem">
            News
          </a>
          <a href="#block4" className="NavBlockItem">
            Contact
          </a>
        </div>
        <div className="HeaderNavigationSocialsBlock">
          <div className="SocialBlockItem">{FbIcon}</div>
          <div className="SocialBlockItem">{TwitterIcon}</div>
          <div className="SocialBlockItem">{InstaIcon}</div>
        </div>
      </div>
      <div className="HeaderTitle">
        <h1>SIMPLE & MODERN</h1>
        <p>WE MAKE THE WORLD BEAUTIFUL EVERYDAY</p>
      </div>
    </div>
  );
};

export default Header;
