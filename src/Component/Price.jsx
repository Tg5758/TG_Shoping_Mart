import React from "react";

const Price = ({discountPercentage, price,showDiscountText = false }) => {
  return (
    <div className="product-price">
      <div size="small" className="Price">
        <strong>Price :</strong>
        <p
          size="small"
          className="discount-price"
          style={{ margin: "0px 10px" }}
        >
          &#8377;{price}
        </p>
        &#8377;
        {Math.floor(price - (price * discountPercentage) / 100)}
        {showDiscountText && (
            <span>({discountPercentage}%)</span>
        )}
      </div>
    </div>
  );
};

export default Price;
