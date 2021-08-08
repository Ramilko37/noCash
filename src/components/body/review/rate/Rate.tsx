import React from "react";
import Stars from "../star/Stars";
import {T} from "react-polyglot-hooks";


interface IProps {
    starValue: number | null
    handleStarValue: (e: number | null) => void
}

const Rate: React.FC<IProps> = ({starValue, handleStarValue}) =>
    <div className="max-w-17 border-red-800 flex flex-col mt-0">
        <h3 className="font-Inter text-white text-center mb-2">
            <T phrase="rate"/>
        </h3>
        <div className="flex justify-center space-x-4">
            <Stars starValue={starValue} handleStarValue={handleStarValue}/>
        </div>
    </div>

export default Rate;
