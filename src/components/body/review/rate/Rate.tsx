import React from "react";
import Stars from "../star/Stars";

// @ts-ignore
const Rate: React.FC = () =>
    <div className="border-red-800 flex flex-col mt-0">
        <h3 className="font-Inter text-white text-center mb-2">Rate the service</h3>
        <div className="flex justify-center space-x-4">
            <Stars/>
        </div>
    </div>

export default Rate;
