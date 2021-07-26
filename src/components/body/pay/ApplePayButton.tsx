import React, {useState} from "react";
import ReactDOM from "react-dom";
import { FaApple } from "react-icons/fa";


const ApplePayButton: React.FC = (props) => {

const applePayBtn = {
    background: '#FFFFFF'
};

   return (

       <button style={applePayBtn}
        className="lg:w-56 xl:text-payButton font-bold py-2 px-4 rounded-full flex
             justify-center outline-none mb-4 text-black mr-4 bg-white"><FaApple className="mt-0.5"/>Pay
    </button>
   )
}
export default ApplePayButton
