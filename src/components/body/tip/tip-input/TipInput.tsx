import React from "react";
import { default as NumberFormat } from 'react-number-format';

interface IProps {
    amount: number
    handleAmount: (amount: number) => void
}

const TipInput: React.FC<IProps> = ({amount, handleAmount}) =>

    <div className="flex justify-center">
        <NumberFormat value={amount} suffix={' €'} onValueChange={(e) => {
            handleAmount(parseFloat(e.value))
        }
        } placeholder="0 €"  className="border-bottom-color text-center w-32 sm:w-60 outline-none
                 p-3 bg-transparent
                 border-b-2 text-white font-sans text-md sm:text-2xl pt-1 border-l-0
                  border-t-0 border-r-0 rounded-none focus-within:ring-0 input-appearance "/>

    </div>

export default TipInput
