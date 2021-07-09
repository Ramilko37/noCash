import React from "react";

const Input: React.FC = () =>
    <div className="w-72 sm:w-3/6 h-11 md:h-28 flex-col justify-center mb-1 text-xs space-y-2 mx-auto">
        <textarea name="message" id=""
    className="w-full h-11 md:h-28 max-h-[3.23rem] w-full bg-textarea-bg text-gray-500 color-grey-darker border border-grey-lighter py-4 px-4 outline-none resize-none rounded-md"
    placeholder="Tell us more… (not necessary)" spellCheck="false"/>
    </div>

export default Input;
