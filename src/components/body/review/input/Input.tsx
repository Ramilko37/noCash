import React from "react";

const Input: React.FC = () =>
    <div className="w-72 sm:w-2/3 md:input-width h-11 md:h-28 flex-col mb-1 text-xs space-y-2 mx-auto ">
        <textarea name="message" id=""
                  className="w-full h-11 md:h-28 max-h-[3.23rem] bg-textarea-bg text-gray-500 color-grey-darker border-0  py-4 px-4 outline-none resize-none rounded-md"
                  placeholder="Tell us more… (not necessary)" spellCheck="false"/>
    </div>

export default Input;
