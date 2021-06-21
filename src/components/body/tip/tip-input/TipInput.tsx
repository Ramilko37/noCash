import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipInput: React.FC<IProps> = ({amount, handleAmount}) =>
    <div className="flex justify-center">
        <input  id="amount" type="text"
                onChange={() => handleAmount(amount)}
                className="border-bottom-color text-center w-20 p-3 bg-transparent border-b-2 text-white font-sans text-sm sm:text-lg pt-1 border-l-0 border-t-0 border-r-0 focus-within:ring-0" placeholder={`${amount} €`}/>
    </div>

export default TipInput
