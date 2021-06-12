import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}

const TipInput: React.FC<IProps> = ({amount, handleAmount}) =>
    <div>
        <input  id="amount" value={amount}
                onChange={() => handleAmount(amount)}
               className="w-32 p-3"/>
    </div>

export default TipInput
