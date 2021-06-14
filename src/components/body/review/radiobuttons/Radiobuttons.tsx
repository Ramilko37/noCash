import React from "react";
import './radiobuttons.css';

const Radiobuttons: React.FC = () =>
    <div className="max-w-sm mx-auto mt-6 flex flex-col">
        <h1 className="mb-6 pt-6 mx-auto text-center text-white">What we can do better</h1>

        <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center border-red-800 text-white">

            <div className="flex">
                <div className="flex items-center mr-4 mb-4">
                    <input id="radio1" type="checkbox" name="radio" className="hidden"/>
                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Service</label>
                </div>
            </div>

            <div className="flex">
                <div className="flex items-center mr-4 mb-4">
                    <input id="radio2" type="checkbox" name="radio" className="hidden"/>
                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Food</label>
                </div>
            </div>

            <div className="flex">
                <div className="flex items-center mr-4 mb-4">
                    <input id="radio3" type="checkbox" name="radio" className="hidden"/>
                    <label htmlFor="radio3" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Cleanness</label>
                </div>
            </div>



            <div className="flex">
                <div className="flex items-center mr-4 mb-4">
                    <input id="radio4" type="checkbox" name="radio" className="hidden"/>
                    <label htmlFor="radio4" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Interior</label>
                </div>

                <div className="flex items-center mr-4 mb-4">
                    <input id="radio5" type="checkbox" name="radio" className="hidden"/>
                    <label htmlFor="radio5" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Music</label>
                </div>

                <div className="flex items-center mr-4 mb-4">
                    <input id="radio6" type="checkbox" name="radio" className="hidden"/>
                    <label htmlFor="radio6" className="flex items-center cursor-pointer">
                        <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                        Atmosphere</label>
                </div>
            </div>

            </div>
    </div>

export default Radiobuttons;
