import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipInput: React.FC<IProps> = ({amount, handleAmount}) =>
    <div className="flex justify-center">
        <input  id="amount" type="number"
                onChange={() => handleAmount(amount)}
                className="border-bottom-color text-center w-20 sm:w-60 outline-none
                 p-3 bg-transparent
                 border-b-2 text-white font-sans text-md sm:text-2xl pt-1 border-l-0
                  border-t-0 border-r-0 rounded-none focus-within:ring-0" placeholder={`${amount} €`}/>
    </div>

export default TipInput
