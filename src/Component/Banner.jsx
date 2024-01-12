import React from "react";

function Banner() {
  return (
    
    <div
      className=" max-w-full w-11/12 bg-fuchsia-100  my-5 mx-20 flex flex-row"
      style={{ height: "540px" }}
    >
      <div className="pt-28 pl-36 " style={{width:"65%"}}>
        <p className="w-1/4 font-semibold  text-5xl">HOMEPAGE RE DESIGN</p>
        <p>Four-Days Challenge </p>
        <p>Design By Tarun Mandaviya </p>
        <div className="flex mt-44">
          <img
            className="w-8 h-8 mr-3 "
            src="./images/shoping.png"
            alt="fast-delivery-icon"
          />
          <p className="items-center text-center">TG Shoping Mart</p>
        </div>
      </div>
      <div className="pt-40 pl-36 overflow-hidden "style={{width:"35%"}}>
      <img
            className="w-96 h-96 mr-3 "
            src="./images/awtar.png"
            alt="fast-delivery-icon"
          />
      </div>
    </div>
  );
}

export default Banner;
