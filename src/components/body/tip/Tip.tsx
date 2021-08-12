import React, {useState} from "react";
import TipButton from "./tip-button/TipButton";
import TipInput from "./tip-input/TipInput";
import {Elements} from "@stripe/react-stripe-js";
import Radiobuttons from "../review/radiobuttons/Radiobuttons";
import Input from "../review/input/Input";
import CardPayButton from "../pay/CardPayButton";
import Checkbox from "../review/radiobuttons/Checkbox";
import CheckoutForm from "../pay/pr/CheckoutForm";
import {loadStripe} from "@stripe/stripe-js";
import Rate from "../review/rate/Rate";
import RadioButton from "../review/radiobuttons/RadioButton";


const amountList = [5, 10, 15, 20]

const stripePromise = loadStripe('pk_live_51JDSkcH8cMQfrIVyeB5uqP2rHebphnA9kAqCAe0GMNF0mC0uUXZEmTL36gUC10pIYuctKgLUdm3osDKZgWQXJktj008m3VSvHf');

interface IProps {
    amount: number
    handleAmount: (e: number) => void
    uuid: string
    checked: boolean
    handleChecked: () => void;
}

let displayGray = 'bg-gray-500';

const Tip: React.FC<IProps> = ({amount, handleAmount, uuid, handleChecked, checked}) => {

    const [starValue, setStarValue] = React.useState<number | null>(0);

    const handleStarValue = (value: number | null) => {
        setStarValue(value);
    }

    return (
        <div className="
        w-full
        h-auto
        sm:w-10/12
        lg: w-full
        mx-auto
        border-solid shadow-2xl
        pt-6
        customer-rounded
        border-t-0
        bg-gray-700
        -mt-10
        lg:mt-0

        ">

            <div className="mb-6 max-w-max md:w-3/4 flex flex-col justify-center mx-auto">
                <TipInput handleAmount={handleAmount} amount={amount}/>
                <div className="flex mt-4 xs:w-30">
                    {amountList.map(e => <TipButton bgColor={e === amount ? 'gradient' : 'tipButton'}
                                                    handleAmount={handleAmount} amount={e} key={e}/>)}
                </div>
            </div>
            <Rate starValue={starValue} handleStarValue={handleStarValue}/>

            {
                starValue != null && starValue < 5 && starValue !== 0
                    ?
                    <div>
                        <div className="flex-col w-60 justify-center mx-auto text-white">
                            <h3 className="text-center mb-6">What can we do better?</h3>
                            <Radiobuttons/>
                        </div>
                        <Input/>
                    </div>
                    :
                    <div/>
            }
            <div className="w-10/12 h-auto flex mx-auto text-white justify-center text-center">

                {/*<Checkbox checked={checked} handleChecked={handleChecked}/>*/}
                <RadioButton id={'7'} content={`I want to cover transaction costs (5% of the tip amount) so that
                                  the employee receives the full amount`} handleChecked={handleChecked}/>

            </div>
            <div className="w-72 flex-col sm:flex-row mx-auto lg:w-4/5 lg:justify-center lg:flex mt-4">
                <Elements stripe={stripePromise}>
                    <CheckoutForm amount={amount}/>
                </Elements>
                <CardPayButton  uuid={uuid} amount={amount}/>
            </div>
            <p className="w-60 text-center text-white mx-auto mt-4 pb-10 text-xs whitespace-pre-wrap">By making a
                payment,
                you agree to the <a
                    href="#" className="underline">terms of the NoCash service</a></p>
        </div>
    )
}

export default Tip
