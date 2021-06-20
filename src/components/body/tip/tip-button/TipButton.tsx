import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipButton: React.FC<IProps> = ({amount, handleAmount}) =>
    <button onClick={() => handleAmount(amount)}
            className="w-16 sm:w-28 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
        {amount}
    </button>
export default TipButton
