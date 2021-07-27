import React, { useState } from "react";
import './radiobuttons.css';
interface IProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    checked: boolean,
}

const Checkbox: React.FC<IProps> = (iProps:IProps) => {
    const [checked, setChecked] = useState(null);


    return(
        <div className="flex items-center mr-4 mb-4">
            <input type="checkbox" name="radio" className="hidden"
            />
            <label className="flex items-center cursor-pointer text-sm">
                <span className="w-4 h-4 inline-block mr-1 rounded-full radio-btn-border"></span>
                </label>
        </div>
    )
}




export default Checkbox;
