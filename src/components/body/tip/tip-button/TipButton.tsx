import React from "react";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void,
    bgColor: string,

}

const TipButton: React.FC<IProps> = ({amount, handleAmount, bgColor}) => {
  return  (<span onClick={() => handleAmount(amount)}
            className={`w-16 h-8 sm:w-28 sm:h-10 bg-${bgColor}
             font-bold py-2 sm:py-1 px-4 sm:text-lg rounded-3xl mr-1 sm:mr-4 last:mr-0 tip-btn-font text-white text-center align-center`}>
        {amount + ' €'}
    </span>)
}




export default TipButton
