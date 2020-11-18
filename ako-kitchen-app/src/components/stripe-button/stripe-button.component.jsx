import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hk5CvCzpyLGChlzvL2sa6AJWezJR5ld2mkSYC1mSlVSS6YE7qKKbAZ9xRaOXp2L2xrZ1Z2SwVcWFCEJns4LqprH00UkSPldJG";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ako Kitchen Ltd."
      currency="GBP"
      billingAddress
      shippingAddress
      image="https://ih1.redbubble.net/image.185099753.8656/flat,750x1000,075,f.u2.jpg"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
