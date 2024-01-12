
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51OUkqASGutt6BxS9nlDevDQnoS5ihyMy7jP5WiLULZCsgKCcZTrv1FvZAGVrIJvUOdhrvou9XSo4cJvRkkTGK4AB00SjecV1hw');

const StripeProvider = ({ children }) => (
  <Elements stripe={stripePromise}>{children}</Elements>
);

export default StripeProvider;