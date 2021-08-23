import React from "react";
import "./product-card.css";
function ProductCard(props) {
  return (
    <div className="product-card  lg:w-64 m-8 bg-ritual-blue flex flex-col">
      <div className="product-card-image overflow-hidden ">
        <img className="max-w-full" src={props.img} alt="" />
      </div>

      <div className="product-card-name align-bottom p-3 bg-grey text-ritual-blue flex justify-center align-center lg:text-xl md:text-base whitespace-nowrap">
        Shop {props.name}
      </div>
    </div>
  );
}

export default ProductCard;
