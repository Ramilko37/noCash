import React, {useState, useEffect} from "react";
import {
    useStripe,
    useElements, CardNumberElement, CardExpiryElement, CardCvcElement
} from "@stripe/react-stripe-js";
import './NoCashCheckoutForm.css';
import {ConfirmCardPaymentData} from "@stripe/stripe-js";
import axios from "axios";

export default function NoCashCheckoutForm() {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        axios
            .post("http://localhost:8083/payment", {
                amount: 1000
            })
            .then((response) => {
                console.log("Response: ", response);
                setClientSecret(response.data);
            })
            .catch((error) => {
                console.log("Payment failed: ", error);
            });
    }, []);


    const handleChange = async (event: any) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };
    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        setProcessing(true);
        const payload = await stripe?.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements?.getElement(CardNumberElement)
            }
        } as ConfirmCardPaymentData);
        if (payload?.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError('');
            setProcessing(false);
            setSucceeded(true);
        }
    };
    const style = {
        base:
            {
                color: 'white',
                fontSize: '16px'
            }
    }
    return (
        <form id="payment-form" onSubmit={handleSubmit}
              className="flex flex-col text-gray-300 p-0 w-72 justify-center mx-auto">
            <div className="w-72">
                <label>
                    Card Number:
                    <CardNumberElement id="card-number" options={{style}} onChange={handleChange}/>
                </label>

            </div>
            <div className="flex space-x-12 w-72">
                <label>
                    Expiry Date:
                    <CardExpiryElement options={{style}} id="card-expiry"/>
                </label>
                <label>
                    CVC:
                    <CardCvcElement options={{style}} id="card-cvc"/>
                </label>
            </div>


            <button
                className="gradient-btn-color w-72"
                disabled={processing || disabled || succeeded}
                id="submit"
            >
            <span id="button-text">
              {processing ? (
                  <div className="spinner" id="spinner"/>
              ) : (
                  "To pay"
              )}
            </span>
            </button>
            {error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}
            {/* Show a success message upon completion */}
            <p className={succeeded ? "result-message" : "result-message hidden"}>
                Payment succeeded, see the result in your
                <a
                    href={`https://dashboard.stripe.com/test/payments`}
                >
                    {" "}
                    Stripe dashboard.
                </a> Refresh the page to pay again.
            </p>
        </form>

    );
}
