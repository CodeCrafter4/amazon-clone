import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount, onSuccess }) => {
    return (
        <PayPalScriptProvider options={{ "client-id": "AW7Fby9Lmjy6rDfXFNKLbrMjn-4tz8MPD9fxkOs5oq6LcYGFUdPSMZU4WhfodQvmTKcYrkXFvTr8i_vy" }}>
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: amount // Use the amount passed in as a prop
                            }
                        }]
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        onSuccess(details); // Call the onSuccess handler passed in as a prop
                    });
                }}
                onError={(err) => {
                    console.error("PayPal Checkout Error: ", err);
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
