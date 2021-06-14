import React from "react";
import { FaApple } from "react-icons/fa";

const ApplePayButton: React.FC = () =>
    <button
            className="bg-white lg:w-40 xl:text-applePayButton font-bold py-2 px-4 rounded-full flex justify-center outline-none"><FaApple className="mt-0.5"/>Pay
    </button>
export default ApplePayButton
