import React from "react";

interface IProps {
    handleStep: () => void
}

const CardPayButton: React.FC<IProps> = (iProps: IProps) =>
    <button onClick={() => iProps.handleStep()}
        className="lg:w-40 md:w-36 hover:bg-yellow-700 font-bold py-2 px-4 rounded-full text-payButton">By Card
    </button>
export default CardPayButton
