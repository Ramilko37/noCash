import React from "react";

const TipButton: React.FC<{amount: number}> = ({amount}) =>
    <button onClick={() => console.log("Amount: ", amount)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
        {amount}
    </button>
export default TipButton
