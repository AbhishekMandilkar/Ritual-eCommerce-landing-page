import React from "react";
import "./introduction-container.css";

import {
  RiLogoutCircleRLine,
  RiShieldCheckLine,
  RiSeedlingLine,
} from "react-icons/ri";
import { AiOutlineStop } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";

function IntroductionContainer() {
  return (
    <div className="introduction-container flex flex-col justify-center items-center px-44 text-ritual-blue text-center">
      <h2 className="introduction-title text-2xl p-12">
        Daily essentials with good intentions — for living life or creating it.
      </h2>
      <div className="introduction-features flex justify-between w-full text-3xl ">
        <div className="feature">
          <RiLogoutCircleRLine />
          <span className="text-sm p-4">Traceable Ingredients</span>
        </div>
        <div className="feature">
          <AiOutlineStop />
          <span className="text-sm p-4">Non-GMO</span>
        </div>
        <div className="feature">
          <RiShieldCheckLine />
          <span className="text-sm p-4">Third Party Tested</span>
        </div>
        <div className="feature">
          <RiSeedlingLine />
          <span className="text-sm p-4">Vegan</span>
        </div>
        <div className="feature">
          <BsDroplet />
          <span className="text-sm p-4">
            No Artificial Flavors or Synthetic Fillers
          </span>
        </div>
      </div>
    </div>
  );
}

export default IntroductionContainer;
