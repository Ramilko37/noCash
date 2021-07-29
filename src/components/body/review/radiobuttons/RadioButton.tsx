import React, { useState } from "react";
import './radiobuttons.css';
interface IProps {
    id: string,
    content: string
    handleChange?: () => boolean
}

const RadioButton: React.FC<IProps> = (iProps:IProps) => {


    return(
        <div className="flex items-center mb-4">
            <input id={iProps.id} type="checkbox" name="radio" className="hidden"
                   />
            <label htmlFor={iProps.id} className="flex items-center cursor-pointer text-sm">
                <span className="w-4 h-4 inline-block mr-1 rounded-full radio-btn-border mr-2 sm:mr-3.5"></span>
                {iProps.content}</label>
        </div>
    )
}




export default RadioButton;
