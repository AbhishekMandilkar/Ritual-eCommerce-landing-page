import React, { useState } from "react";
import "./featured-product.css";

import ProductCardPlaceHolder from "../../images/PDP_EFW_Bottle.jpg";
import CardOneImage from "../../images/PDP-EFW18-Hand.jpg";
import CardTwoImage from "../../images/PDP_EPRE_Hand.jpg";
import CardThreeImage from "../../images/PDP-EP18-Model-2.jpg";
import CardFourImage from "../../images/LL.jpg";
import CardThreePlacholder from "../../images/PDP-EP18-Bag.jpg";

function FeaturedProducts() {
  return (
    <div className="featured-products-container flex flex-col justify-center ">
      <div className="featured-product-header  mx-52 flex justify-between items-center p-2 text-ritual-blue">
        <span className="text-4xl ">Featured Products</span>
        <span className="underline cursor-pointer">Shop all</span>
      </div>
      <div className="mx-52 flex">
        <FeaturedProductCard
          for="Women"
          type="Multivitamins 18+"
          info="The clinical-backed multivitamins,reimagined for women 18+"
          cardImage={CardOneImage}
          cardPlaceholder={ProductCardPlaceHolder}
        />
        <FeaturedProductCard
          for="Women"
          type="Prenatal Multivitamins"
          info="The prenatal multivitamins for thinking,trying,and when its time"
          cardImage={CardTwoImage}
          cardPlaceholder={ProductCardPlaceHolder}
        />
        <FeaturedProductCard
          for="Protein"
          type="Daily Shake 18+"
          info="The reimagined plant-based protein for adults 18-49"
          cardPlaceholder={CardThreePlacholder}
          cardImage={CardThreeImage}
        />
        <FeaturedProductCard
          for="Women"
          type="Multivitamins 18+"
          info="Formulated for men 18-49 to help fill nutrient gaps in there diet*"
          cardImage={CardFourImage}
          cardPlaceholder={ProductCardPlaceHolder}
        />
      </div>
    </div>
  );
}

export default FeaturedProducts;

function FeaturedProductCard(props) {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);

  return (
    <div className="product-card p-3">
      <div className="product-image relative flex justify-center cursor-pointer">
        <img
          onMouseOver={() => {
            setShowLearnMore(true);
            setShowPlaceHolder(false);
          }}
          onMouseLeave={() => {
            setShowLearnMore(false);
            setShowPlaceHolder(true);
          }}
          className="product-image"
          src={showPlaceHolder ? props.cardPlaceholder : props.cardImage}
          alt=""
        />
        {showLearnMore ? (
          <div className="bg-gray-100 text-ritual-blue flex justify-center items-center z-30 absolute bottom-0 w-full h-10">
            Learn More
          </div>
        ) : null}
      </div>
      <div className="product-card-info pt-4 flex flex-col text-ritual-blue">
        <span className="text-lg font-serif italic">
          Essention for {props.for}
        </span>
        <span className="text-2xl">{props.type}</span>
        <span className="break-all text-sm text-ritual-blue-lt pt-3">
          {props.info}
        </span>
      </div>
    </div>
  );
}
