import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipInput: React.FC<IProps> = ({amount, handleAmount}) =>
    <div className="flex justify-center">
        <input  id="amount" value={amount}
                onChange={() => handleAmount(amount)}
               className="text-center w-32 p-3 bg-transparent border-b-2 text-white font-Inter pt-1"/>
    </div>

export default TipInput
