import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Customer from "./customer/Customer";
import Tip from "./tip/Tip";


const Body: React.FC = () =>{
    let [step, setStep] = React.useState(0)

    const handleStep = (e: number) => {
        setStep(e)
    }

    let [amount, setAmount] = React.useState(5)

    const handleAmount = (a: number) => {
        setAmount(a)
    }


return (
    <div className="container bg-gray-700 customer-rounded sm:max-w-screen-lg md:max-w-screen-xl flex-col lg:flex md:flex-row sm:flex-col pb-6">
        {step === 0 ? <Customer /> : 
        <div className="flex text-white text-lg place-content-center space-x-4 p-4">
            <span >Payment amount </span> 
            <span > {amount} €</span>
        </div>
        }    
    <Tip step={step} handleStep={handleStep} amount={amount} handleAmount={handleAmount}/>
</div>
)
}

export default Body
