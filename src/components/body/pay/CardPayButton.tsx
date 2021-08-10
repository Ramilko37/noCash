import React from "react";
import {Link} from "react-router-dom";

interface IProps {
    uuid: string,
    amount: number
}


const CardPayButton: React.FC<IProps> = ({uuid, amount}) => {
    console.log("uuid: ", uuid);
    {
        if (amount != 0) {
            return (<Link to={`/customer/payment/${uuid}`}>
                <button
                    className="lg:w-56 font-bold py-2 px-4 rounded-full text-white">By Card
                </button>
            </Link>)
        }
        {
            return (<Link to={`/customer/payment/${uuid}`}>
                <button
                    className="lg:w-56 font-bold py-2 px-4 rounded-full text-white" disabled={true}>By Card
                </button>
            </Link>)
        }
    }
}

export default CardPayButton
