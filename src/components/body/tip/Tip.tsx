import React from "react";
import TipButton from "./tip-button/TipButton";
import TipInput from "./tip-input/TipInput";
import Rate from "../rate/Rate";

const amountList = [5, 10, 15, 20]

const Tip: React.FC<{}> = () => {
    let [amount, setAmount] = React.useState(5)
    const handleAmount = (a: number) => {
        setAmount(a)
    }
    return (
        <div className="
        lg:h-full lg:w-3/4
        md:h-3/4 md:w-full
        sm:h-3/4 sm:w-full
        ">
            <div className="m-20 max-w-lg flex flex-col justify-center">
                <TipInput handleAmount={handleAmount} amount={amount}/>
               <div className="flex justify-between mt-4">
                   {amountList.map(e => <TipButton handleAmount={handleAmount} amount={e} key={e}/>)}
               </div>
            </div>
        <Rate/>
        </div>
    )
}

export default Tip

