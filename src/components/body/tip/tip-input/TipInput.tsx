import  React from "react";
import { default as NumberFormat } from 'react-number-format';
import closeIcon from "../../../../img/Close Icon.png";



interface IProps {
    amount: number
    handleAmount: (amount: number) => void
}

// @ts-ignore
const TipInput: React.FC<IProps> = ({amount, handleAmount}) => {

    const zero = () => {
        handleAmount(0);
        console.log('0');
    }


    return (
    <div className="flex justify-center mt-10">
        <NumberFormat value={amount} suffix={' €'} onValueChange={(e) => {
            handleAmount(parseFloat(e.value))
        }
        } placeholder="0 €"  className="border-bottom-color text-center w-20 sm:w-60 outline-none
                 p-3 bg-transparent
                 border-b-2 text-white font-sans text-md sm:text-2xl pt-1 border-l-0
                  border-t-0 border-r-0 rounded-none focus-within:ring-0 input-appearance "/>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
             onClick={() => handleAmount(0)}
        >
            <rect x="1.41406" width="23" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="white"/>
            <rect y="16.2637" width="23" height="2" rx="1" transform="rotate(-45 0 16.2637)" fill="white"/>
        </svg>

    </div>
    )
};



export default TipInput
