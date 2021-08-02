import React, {useState} from "react";
import ReactDOM from "react-dom";
import { FaApple } from "react-icons/fa";


const ApplePayButton: React.FC = (props) => {

    const applePayBtn = {
        background: '#FFFFFF'
    };

    return (

        <button style={applePayBtn}
                className="w-72 sm:w-60 xl:text-payButton font-bold py-2 px-4 rounded-full flex
             justify-center outline-none text-black mb-2.5 mr-4 bg-white"><FaApple className="mt-0.5"/>Pay
        </button>
    )
}
export default ApplePayButton
