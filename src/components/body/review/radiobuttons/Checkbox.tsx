import React, { useState } from "react";
import './radiobuttons.css';
interface IProps {
    handleChecked: () => void;
    checked: boolean
}

const Checkbox: React.FC<IProps> = ({handleChecked, checked}) => {

    return(
        <div className="flex mb-4">
            <input id="radio7" type="checkbox" name="radio" className="hidden"
                   checked={checked} onChange={() => handleChecked} />
            <label htmlFor="radio7" className="flex cursor-pointer">
                <span className="w-4 h-4 rounded-full radio-btn-border"></span>
            </label>
            <p className="text-xs w-30 ml-2">I want to cover transaction costs (5% of the tip amount) so that
                the employee receives the full amount</p>
        </div>
    )
}




export default Checkbox;
