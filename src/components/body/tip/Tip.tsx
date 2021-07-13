import React, {useEffect, useState} from "react";
import TipButton from "./tip-button/TipButton";
import TipInput from "./tip-input/TipInput";
import Rate from "../review/rate/Rate";
import NoCashCheckoutForm from "../pay/checkout/NoCashCheckoutForm";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import Radiobuttons from "../review/radiobuttons/Radiobuttons";
import Input from "../review/input/Input";
import RadioButton from "../review/radiobuttons/RadioButton";
import ApplePayButton from "../pay/ApplePayButton";
import CardPayButton from "../pay/CardPayButton";

const amountList = [5, 10, 15, 20]


const stripePromise = loadStripe('pk_test_51IxSuWLkp54pVwNHVSlpuWCEyw2aQa8beEYD1DKb351afWkTHdf9NPUnFxALJNXaNy6drLvBRJFRBc6PGGw5Q7SR00qpa6RPR2');

interface IProps {
    step: number
    handleStep: (e: number) => void
    amount: number
    handleAmount: (e: number) => void
}

const Tip: React.FC<IProps> = ({step, handleStep, amount, handleAmount}) => {

    // @ts-ignore
    return (
        step === 0

            ?

            <div className="
        lg:h-full lg:w-3/4
        md:h-3/4 md:w-full
        sm:h-3/4 sm:w-full
        mt-10
        ">
                <div className="m-20 mt-2 mb-6 max-w-max md:w-3/4 flex flex-col justify-center mx-auto">
                    <TipInput handleAmount={handleAmount} amount={amount}/>
                    <div className="flex mt-4">
                        {amountList.map(e => <TipButton bgColor={e === amount ? 'gradient' : 'tipButton'} handleAmount={handleAmount} amount={e} key={e}/>)}
                    </div>
                </div>
                <Rate/>
                <div className="flex-col w-60 justify-center mx-auto text-white">
                    <h3 className="text-center mb-6">What can we do better?</h3>
                    <Radiobuttons/>
                </div>
                <Input/>
                <div className="w-72 sm:w-96 flex space-x-1 mx-auto">
                    <div className="flex pt-1 mx-auto text-white flex-wrap mt-4 justify-center">
                        <input id="radio7" type="checkbox" name="radio" className="hidden"/>
                        <label htmlFor="radio7" className="flex items-center cursor-pointer">
                            <RadioButton id={'radio7'}
                                         content={''}/>
                            <p className="text-xs max-w-md">I want to cover transaction costs (5% of the tip amount) so that the employee receives the full amount</p>
                        </label>
                    </div>

                </div>
                <div className="w-72 flex-col sm:flex-row mx-auto lg:w-4/5 lg:justify-center lg:flex mt-4">
                    <ApplePayButton />
                    <CardPayButton handleStep={() => handleStep(1)}/>
                </div>

                <p className="w-60 text-center text-white mx-auto mt-4 mb-10 text-xs whitespace-pre-wrap">By making a payment,
                    you agree to the <a
                        href="#" className="underline">terms of the NoCash service</a></p>


            </div>

            :

            <div className="
        lg:h-full lg:w-3/4
        md:h-3/4 md:w-full
        sm:h-3/4 sm:w-full
        mt-4 flex-col md:flex-row
        ">

                {/*<div className="flex justify-center w-75 mt-36">*/}
                {/*    <div className="flex justify-center">*/}
                        <Elements stripe={stripePromise}>
                            <NoCashCheckoutForm amount={amount}/>
                        </Elements>
                    {/*</div>*/}

            </div>
    )
}

export default Tip

