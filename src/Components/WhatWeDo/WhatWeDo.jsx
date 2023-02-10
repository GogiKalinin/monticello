import React from "react";
import { location_icon } from "../../Images/svgImages";
import { DigitalButton } from "../DigitalButton/DigitalButton";
import "./WhatWeDo.sass";

export const WhatWeDo = () => {
  return (
    <div className="WhatWeDoContainer">
      <div className="WhatWeDoTitle">
        <div className="WhatWeDoTitleBorder"></div>
        <h1>What We Do</h1>
      </div>
      <div className="TradeCenterContainer">
        <div className="TradeCenterImages">
          <div className="TradeCenterImagesSquare"></div>
          <div className="TradeCenterImagesBuilding"></div>
        </div>
        <div className="TradeCenterText">
          <div className="TradeCenterTextFstTitle">ONE WORLD</div>
          <div className="TradeCenterTextSecTitle">TRADE CENTER</div>
          <div className="TradeCenterTextParag">
            Increasing prosperity in our lives can be accomplished by having the
            right frame of mind. The truth is, our thoughts are very powerful.
          </div>
          <div className="TradeCenterButton">
            <DigitalButton text='MORE DETAILS'/>
          </div>
          <div className="TradeCenterCoordinates">
            {location_icon} 
            <p>New York City, United States - 1776 feet</p> 
          </div>
        </div>
      </div>
      <div className="CommerceCenterContainer">
        <div className="CommerceCenterText">
          <div className="CommerceCenterTextFstTitle">INTERNATIONAL</div>
          <div className="CommerceCenterTextSecTitle">COMMERCE CENTRE</div>
          <div className="CommerceCenterTextParag">
          Successful businesses have many things in common, today we’ll look at the big ‘R’ of recognition and how a digital advertising network may help.
          </div>
          <div className="CommerceCenterButton">
            <DigitalButton text='MORE DETAILS'/>
          </div>
          <div className="CommerceCenterCoordinates">
            {location_icon} 
            <p>Hong Kong - 1588 feet</p> 
          </div>
        </div>
        <div className="CommerceCenterImages">
          <div className="CommerceCenterImagesSquare"></div>
          <div className="CommerceCenterImagesBuilding"></div>
        </div>
      </div>
      {/* <div className="CommerceCenterContainer">
        <div className="CommerceCenterImages"></div>
        <div className="CommerceCenterText"></div>
      </div> */}
    </div>
  );
};
