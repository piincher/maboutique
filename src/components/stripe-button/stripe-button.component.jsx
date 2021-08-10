import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51JN05BJhsLAUagMJXmk0U8p8oQkNTecq9bU5x5PjxDTc8DRnrIyCw4XX60u35V89yzH6kFyHxEJ1JJ9NMCJ95Dd7009wP83Kd9';
	const onToken = (token) => {
		console.log(token);
		alert('payement successful');
	};
	return (
		<StripeCheckout
			label="pay now"
			name="MEAL to go Ltd"
			billingAddress
			shippingAddress
			image="https://sendeyo.com/en/f3eb2117da"
			description={`Your Total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay now"
			token={onToken}
			stripeKey={publishableKey}
			alipay={true}
		/>
	);
};
export default StripeCheckoutButton;
