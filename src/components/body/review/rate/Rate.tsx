import React from "react";
import Star from "../star/Star";


const Rate: React.FC = () =>
    <div className="max-w-17 border-red-800 flex flex-col">
        <h3 className="font-Inter text-white text-center">Rate the service</h3>
        <div className="flex justify-center space-x-4">
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    </div>

export default Rate;
