import React, { useState } from "react";
import './radiobuttons.css';
interface IProps {
    handleChecked: () => void;
    checked: boolean
}

const Checkbox: React.FC<IProps> = ({handleChecked, checked}) => {

    return(
        <div className="flex items-center mr-4 mb-4">
            <input id="radio7" type="checkbox" name="radio" className="hidden"
                   checked={checked} onChange={() => handleChecked()} />
            <label htmlFor="radio7" className="flex items-center cursor-pointer">
                <span className="w-6 h-4 inline-block rounded-full radio-btn-border"></span>
                <p className="text-xs max-w-md ml-5">I want to cover transaction costs (5% of the tip amount) so that
                    the employee receives the full amount</p>
            </label>
        </div>
    )
}




export default Checkbox;
