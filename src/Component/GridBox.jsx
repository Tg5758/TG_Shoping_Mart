import React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import "./style.css";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import Price from "./Price";

export default function GridBox({ item }) {
  const navigate = useNavigate();

  return (
    <>
     
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 mx-7" >
          <a href="/">
            <img className="hover:scale-110 transition duration-500 cursor-pointer object-cover product-image-section p-8 rounded-t-lg" src={item.images[0]} alt="" />
          </a>
          <div className="px-5 pb-5" onClick={() => navigate(`/product/${item.id}`)}>
            <a href="/">
              <h5 className="product-description text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.description}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                <StarRating rating={item.rating} />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                <Price
                  price={item.price}
                  discountPercentage={item.discountPercentage}
                />
              </span>
              
            </div>
          </div>
        </div>
    </>
  );
}
