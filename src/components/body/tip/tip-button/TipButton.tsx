import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipButton: React.FC<IProps> = ({amount, handleAmount}) =>
    <button onClick={() => handleAmount(amount)}
            className="w-16 h-8 sm:w-28 sm:h-10 hover:bg-yellow-700
             text-white font-bold py-2 px-4 rounded-sm mr-1 sm:mr-4 last:mr-0">
        {amount}
    </button>
export default TipButton
