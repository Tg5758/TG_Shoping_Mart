import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


function PaymentDetail({ price}) {
  const stripe = useStripe();
  const elements = useElements();
  const [customPrice, setCustomPrice] = useState(price);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Validate customPrice (you may want to add additional validation logic)
    if (!customPrice || isNaN(parseFloat(customPrice))) {
      console.error('Invalid custom price');
      return;
    }

    const { token, error } = await stripe.createToken(cardElement, {
      amount: parseFloat(customPrice) * 100, // Convert to cents
      currency: 'usd',
    });
    const onPaymentSuccess = () => {
      alert("your payment is successfull")
    }

    if (error) {
      console.error(error);
    } else {
      // Handle successful payment
      console.log(token);
      onPaymentSuccess(); // Trigger any additional action on payment success
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Custom Price:
        <input
          type="text"
          value={customPrice}
          onChange={(e) => setCustomPrice(e.target.value)}
        />
      </label>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
}

export default PaymentDetail