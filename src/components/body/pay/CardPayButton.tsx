import React from "react";

interface IProps {
    handleStep: () => void
}

const CardPayButton: React.FC<IProps> = (iProps: IProps) =>
    <button onClick={() => iProps.handleStep()}
        className="w-72 sm:w-60 bg-gradient font-bold py-2 px-4 rounded-full text-white">By Card
    </button>
export default CardPayButton
