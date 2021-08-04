import React, {useState, useEffect} from 'react';
import {PaymentRequestButtonElement, useStripe} from '@stripe/react-stripe-js';
import axios from "axios";
import {PaymentRequest, StripeElementClasses, StripePaymentRequestButtonElementOptions} from "@stripe/stripe-js";

interface IProps {
    amount: number
}

const CheckoutForm: React.FC<IProps> = ({amount}) => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(null);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        console.log("Stripe: ", stripe);
        if (stripe) {
            const pr = stripe.paymentRequest({
                country: 'AU',
                currency: 'eur',
                total: {
                    label: 'Demo total',
                    amount: amount,
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });
            console.log("StripePR: ", pr);
            // Check the availability of the Payment Request API.
            pr.canMakePayment().then(result => {
                console.log("result: ", result);
                if (result) {
                    // @ts-ignore
                    setPaymentRequest(pr);
                }
            });

            axios
                .post("https://nocash-319015.ew.r.appspot.com/payment", {
                    amount: amount
                })
                .then((response) => {
                    console.log("Response: ", response);
                    setClientSecret(response.data);
                })
                .catch((error) => {
                    console.log("Payment failed: ", error);
                });
        }
    }, [stripe]);

    console.log("paymentRequest: ", paymentRequest);

    if (paymentRequest && stripe) {
        paymentRequest.on('paymentmethod', async (ev: any) => {
            // Confirm the PaymentIntent without handling potential next actions (yet).
            const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
                clientSecret,
                {payment_method: ev.paymentMethod.id},
                {handleActions: false}
            );

            if (confirmError) {
                ev.complete('fail');
            } else {
                ev.complete('success');
                // @ts-ignore
                if (paymentIntent.status === "requires_action") {
                    const {error} = await stripe.confirmCardPayment(clientSecret);
                    if (error) {
                        // The payment failed -- ask your customer for a new payment method.
                    } else {
                        // The payment has succeeded.
                    }
                } else {
                    // The payment has succeeded.
                }
            }
        });
    }

    if (paymentRequest) {
        const cssClasses: StripeElementClasses = {
            base: "apple-pay-border"
        }
        const options: StripePaymentRequestButtonElementOptions = {
            classes: cssClasses,
            paymentRequest: paymentRequest,
            style: {
                paymentRequestButton: {
                    theme: 'light'
                }
            }
        }
        return <PaymentRequestButtonElement options={options}/>
    } else {
        return <div/>;
    }
}


export default CheckoutForm;