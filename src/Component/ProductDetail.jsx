import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import StarRating from "./StarRating";
import Price from "./Price";
import Header from "./Header";
import { useProductData } from "../hooks/useProductData";
import HandleDialog from "./HandleDialog";
import StripeProvider from "./StripeProvider";

function ProductDetail() {
  const { id } = useParams();
  const [url, setUrl] = useState(0);
  const [stocks, setStocks] = useState(1);
  const [open, setOpen] = useState(false);
  const [openByNow, setOpenByNow] = useState(false);

  const navigate = useNavigate();

  const { isLoading, data } = useProductData(id);
  const productDetail = data?.data || {
    title: "",
    description: "",
    category: "",
    brand: "",
    rating: 0,
    discountPercentage: 0,
    price: 0,
    stock: 0,
    images: [],
  };
  const item_images = productDetail.images;

  if (isLoading) return <p>Loading</p>;
  return (
    <>
     <StripeProvider>
      <Header />
      <button onClick={() => navigate("/")}>
        <img
          src="/images/rewind-button.png"
          alt="prev-icon"
          className="h-7 w-7"
        />
      </button>
      <div className="single-product lg:flex w-11/12 bg-gray-400 rounded-lg ">
        <div className="left-side-product lg:w-2/5 sm:w-full">
          <div className="main-img mx-auto mt-5 object-cover sm:pt-3 pt-3 w-9/12 ">
            <img src={item_images[url]} alt="product-main-icon" />
          </div>
          <div className="p-2 flex justify-center  sm:w-full bg-slate-300 rounded-lg ">
            {item_images.map((item, index) => (
              <div className="img-section w-20 mx-2 p-2 h-20  sm:min-h-fit">
                <img
                  className="w-16 h-16"
                  src={item}
                  onClick={() => setUrl(index)}
                  alt={item}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="right-side-product p-3  pt-3  lg:w-3/5">
          <p>
            <strong>{productDetail.title}</strong>
          </p>
          <strong>{productDetail.description}</strong>
          <StarRating rating={productDetail.rating} showRatingText={true} />

          <div>
            <p>
              <strong>
                {" "}
                <Price
                  price={productDetail.price}
                  discountPercentage={productDetail.discountPercentage}
                  showDiscountText
                />
              </strong>
            </p>
            <div className=" lg:flex justify-between">
              <div className=" flex ">
                <img
                  className="w-5 h-5 mr-3"
                  src="/images/verified-user.png"
                  alt="verified-icon"
                />
                <span>100% Genuine </span>
              </div>
              <div className="flex flex-col">
                <div className="flex">

                <img
                  className="w-5 h-5 mr-3"
                  src="/images/fast-delivery.png"
                  alt="fast-delivery-icon"
                />
                <span>Free Shipping to Peninsular india </span>
                </div>
              </div>
            </div>
          </div>
          <p>Brand : {productDetail.brand}</p>
          <p>Categories : {productDetail.category}</p>
          <div className="flex">
            <p>Quentity:</p>
            <button
              className="bg-white hover:bg-sky-700 w-6 ml-6"
              disabled={stocks === 1}
              onClick={() => setStocks(stocks - 1)}
            >
              -
            </button>
            <p className="mx-5">{stocks}</p>
            <button
              className="bg-white hover:bg-sky-700 w-6"
              disabled={stocks === productDetail.stock}
              onClick={() => setStocks(stocks + 1)}
            >
              +
            </button>
          </div>
          <p>{`product remaining ${productDetail.stock - stocks}`}</p>
           <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => setOpen(true)}>Check Delievery</button>
          
        </div>
      </div>
      <HandleDialog open={open} setOpenByNow={setOpenByNow} openByNow={openByNow} setOpen={setOpen} price={productDetail.price}/>
      </StripeProvider> 
    </>
  );

  // ;
}

export default ProductDetail;
