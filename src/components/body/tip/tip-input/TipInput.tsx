import  React from "react";
import { default as NumberFormat } from 'react-number-format';
import closeIcon from "../../../../img/Close Icon.png";
import {responsiveFontSizes} from "@material-ui/core";

interface IProps {
    amount: number
    handleAmount: (amount: number) => void
}

// @ts-ignore
const TipInput: React.FC<IProps> = ({amount, handleAmount}) => {



return (
    <div className="flex mx-auto w-20 sm:w-32">
        <NumberFormat value={amount} suffix={' €'} onValueChange={(e) => {
            handleAmount(parseFloat(e.value))
        }
        } placeholder="0 €"  className="mx-auto border-bottom-color text-center outline-none
                 bg-transparent pb-2.5 sm:pb-4
                 border-b-2 text-white font-sans text-base sm:text-2xl border-l-0
                  border-t-0 border-r-0 rounded-none focus-within:ring-0 input-appearance "/>
        <button className="bg-none mt-2.5 ml-2.5 sm:ml-2 w-6 h-6 p-0 border-solid outline-none" onClick={()=>handleAmount(0)}><img className="w-3 h-3" src={closeIcon} alt="close"/>
        </button>

    </div>
    )
};



export default TipInput
