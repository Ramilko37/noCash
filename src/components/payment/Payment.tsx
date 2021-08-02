import React from 'react';
import {Elements} from "@stripe/react-stripe-js";
import NoCashCheckoutForm from "../body/pay/checkout/card/NoCashCheckoutForm";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_live_51JDSkcH8cMQfrIVyeB5uqP2rHebphnA9kAqCAe0GMNF0mC0uUXZEmTL36gUC10pIYuctKgLUdm3osDKZgWQXJktj008m3VSvHf');

interface IProps {
    amount: number
}

const Payment: React.FC<IProps> = ({amount}) =>
    <div>
        <div className="flex text-white text-lg place-content-center space-x-4 p-4">
            <span>Payment amount </span>
            <span> {amount} €</span>
        </div>
        <div className="
        lg:h-full lg:w-3/4
        md:h-3/4 md:w-full
        sm:h-3/4 sm:w-full
        mt-4 flex-col md:flex-row
        ">
            <Elements stripe={stripePromise}>
                <NoCashCheckoutForm amount={amount}/>
            </Elements>
        </div>
    </div>
export default Payment
