import React from "react";
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
        </div>
      </div>
      <div className="CommerceCenterContainer">
        <div className="CommerceCenterImages"></div>
        <div className="CommerceCenterText"></div>
      </div>
    </div>
  );
};
