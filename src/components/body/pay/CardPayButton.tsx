import React from "react";

interface IProps {
    handleStep: () => void
}

const CardPayButton: React.FC<IProps> = (iProps: IProps) =>
    <button onClick={() => iProps.handleStep()}
        className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 lg:w-40 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">By Card
    </button>
export default CardPayButton
