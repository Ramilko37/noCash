import React from "react";
import { FaApple } from "react-icons/fa";

const ApplePayButton: React.FC = () =>
    <button
            className="lg:w-40 md:w-36 xl:text-payButton font-bold py-2 px-4 rounded-full flex justify-center outline-none mb-4 mr-4"><FaApple className="mt-0.5"/>Pay
    </button>
export default ApplePayButton
