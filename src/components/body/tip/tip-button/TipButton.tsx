import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipButton: React.FC<IProps> = ({amount, handleAmount}) =>
    <button onClick={() => handleAmount(amount)}
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 w-28 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
        {amount}
    </button>
export default TipButton
