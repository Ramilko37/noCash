import React from "react";
import {Link} from "react-router-dom";

interface IProps {
    uuid: string
}


const CardPayButton: React.FC<IProps> = ({uuid}) => {
    console.log("uuid: ", uuid);
    return (
        <Link to={`/customer/payment/${uuid}`}>
            <button
                className="lg:w-56 bg-gradient font-bold py-2 px-4 rounded-full text-white">By Card
            </button>
        </Link>
    )
}

export default CardPayButton
