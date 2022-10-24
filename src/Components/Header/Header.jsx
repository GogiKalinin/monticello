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
          <div className="NavBlockItem">About us</div>
          <div className="NavBlockItem">Projects</div>
          <div className="NavBlockItem">News</div>
          <div className="NavBlockItem">Contact</div>
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
