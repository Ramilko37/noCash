import React from "react";
import './radiobuttons.css';
interface IProps {
    id: string,
    content: string
}

const RadioButton: React.FC<IProps> = (iProps:IProps) =>
                <div className="flex items-center mr-4 mb-4">
                    <input id={iProps.id} type="checkbox" name="radio" className="hidden"/>
                    <label htmlFor={iProps.id} className="flex items-center cursor-pointer text-sm">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        {iProps.content}</label>
                </div>

export default RadioButton;
