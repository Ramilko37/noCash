import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipInput: React.FC<IProps> = ({amount, handleAmount}) =>
    <div className="flex justify-center">
        <input  id="amount" value={`${amount} €`}
                onChange={() => handleAmount(amount)}
                className="border-bottom-color text-center w-32 p-3 bg-transparent border-b-2 text-white font-sans text-4xl pt-1 mt-10" placeholder={`${amount} + Euro`}/>
    </div>

export default TipInput
