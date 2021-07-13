import React, {useState, useEffect} from "react";
import {
    useStripe,
    useElements, CardNumberElement, CardExpiryElement, CardCvcElement
} from "@stripe/react-stripe-js";
import './NoCashCheckoutForm.css';
import {ConfirmCardPaymentData} from "@stripe/stripe-js";
import axios from "axios";

interface IProps {
    step?: number
    handleStep?: (e: number) => void
    amount?: number
    handleAmount?: (e: number) => void
}

const NoCashCheckoutForm: React.FC<IProps> = ({amount}) =>  {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        axios
            .post("https://quiet-platform-317414.uc.r.appspot.com/payment", {
                amount: amount
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
        <div className="flex-col justify-center w-72 sm:w-90 md:w-3/4 mx-auto pay-form-bg">
            <form id="payment-form" onSubmit={handleSubmit}
                  className="flex flex-col text-gray-300 p-0 w-full justify-center mx-auto md:mt-10 form-p form-bg">
                <div className="w-64 h-14 sm:w-3/4 mb-5">
                    <label className="text-xs">
                        Card Number:
                        <CardNumberElement className="form-input-bg form-input-h" id="card-number" options={{placeholder:'0000 0000 0000 0000',style}} onChange={handleChange}/>
                    </label>

                </div>
                <div className="flex space-x-12 w-72">
                    <label className="text-xs">
                        Expiry Date:
                        <CardExpiryElement className="form-input-year form-input-bg form-input-h" options={{placeholder:'00/00',style}} id="card-expiry"/>
                    </label>
                    <label className="text-xs">
                        CVC:
                        <CardCvcElement className="form-input-cvc form-input-bg w-16 form-input-h text-sm" options={{placeholder:'000', style}} id="card-cvc"/>
                    </label>
                </div>



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
            <p className="text-xs mx-auto w-full mt-3 color-gold">
                The bank card data will be transmitted in a fixed form
            </p>
            <button
                className="gradient-btn-color w-full justify-center mx-auto mt-3 w-72"
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
        </div>

    );
}

export default NoCashCheckoutForm