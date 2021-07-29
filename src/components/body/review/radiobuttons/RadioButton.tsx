import React, { useState } from "react";
import './radiobuttons.css';
interface IProps {
    id: string,
    content: string
    handleChange?: () => boolean
}

const RadioButton: React.FC<IProps> = (iProps:IProps) => {


    return(
        <div className="flex items-center mr-4 mb-4 sm:mr-8">
            <input id={iProps.id} type="checkbox" name="radio" className="hidden"
                   />
            <label htmlFor={iProps.id} className="flex items-center cursor-pointer text-sm">
                <span className="w-4 h-4 inline-block mr-1 rounded-full radio-btn-border"></span>
                {iProps.content}</label>
        </div>
    )
}




export default RadioButton;
