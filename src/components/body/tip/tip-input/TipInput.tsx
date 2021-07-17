import React from "react";
import InputMask from "react-input-mask";

interface IProps {
    amount: number,
    handleAmount: (amount: number) => void
}



const handleInput = (amount: number) => {
   let newMask = null;
   let newAmount = amount;
   return newAmount;
}

const TipInput: React.FC<IProps> = ({amount, handleAmount}) =>

    <div className="flex justify-center">



        {/*<input  id="amount" type="number" required autoComplete="off" pattern="[0-9]"*/}
        {/*        onChange={() => handleAmount(amount)}*/}
        {/*        className="border-bottom-color text-center w-20 sm:w-60 outline-none*/}
        {/*         p-3 bg-transparent*/}
        {/*         border-b-2 text-white font-sans text-md sm:text-2xl pt-1 border-l-0*/}
        {/*          border-t-0 border-r-0 rounded-none focus-within:ring-0 input-appearance" placeholder={`${amount} €`} />*/}


        <InputMask  alwaysShowMask={true}
                    mask={amount + ' €'}




                className="border-bottom-color text-center w-20 sm:w-60 outline-none
                 p-3 bg-transparent
                 border-b-2 text-white font-sans text-md sm:text-2xl pt-1 border-l-0
                  border-t-0 border-r-0 rounded-none focus-within:ring-0 input-appearance"
          maskPlaceholder={`${amount} €`}

        >
        </InputMask>
    </div>

export default TipInput
