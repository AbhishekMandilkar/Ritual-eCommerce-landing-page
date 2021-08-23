import React from "react";
import "./hero-container-styles.css";

function HeroContainer() {
  return (
    <div className="hero-container flex flex-row justify-center ">
      <div className="hero-background-container w-full  bg-hero-dsk bg-center bg-cover bg-no-repeat">
        <div className="hero-content-wrapper  flex flex-col h-full justify-center items-center ">
          <h1 className="text-ritual-blue">
            <div className="align-right pl-24 text-7xl my-1">The future</div>
            <span className="text-7xl my-2 ">of health</span>
            <div className="pl-24 font-serif italic text-7xl my-1 ">
              — is clear.
            </div>
          </h1>
          <div className="hero-button">
            <button className="cta-mail text-white bg-ritual-blue px-12 py-3 rounded-full m-4 hover:bg-white hover:text-ritual-blue">
              Shop All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;
