import React from "react";
import "./featured-area-one.css";
import Image from "../../images/home-feat-dyson.jpg";
function FeatureAreaOne() {
  return (
    <>
      <div className="background-blob slide-right top-100"></div>
      <div className="featured-area-one flex mx-44 my-24">
        <div className="featured-area-image  w-full h-full">
          <img src={Image} className="" alt="" />
        </div>
        <div className="featured-area-info  w-full  p-20 flex flex-col justify-around text-ritual-blue">
          <h1 className="text-4xl">
            We're not about pseudoscience and half-truths
          </h1>
          <span className="text-xl font-serif">
            From Omega-3 DHA from microalgae to regeneratively-farmed pea
            protein, our scientists studied diets and genetics to make daily
            essentials based on what we need.
          </span>
          <span className="text-xl underline cursor-pointer hover:text-gray-400 ">
            Who we are
          </span>
        </div>
      </div>
    </>
  );
}

export default FeatureAreaOne;
