import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_Z4J7sLwffYeACphimmxNrhir00q0QyrVD4';
	const onToken = token => {
		console.log(token);
	};

	return (
		<StripCheckout
			label="Pay Now"
			name="Cool Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
