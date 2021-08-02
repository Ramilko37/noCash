import React from 'react';
import Customer from "../body/customer/Customer";
import Tip from "../body/tip/Tip";
import {useParams} from "react-router";


interface IProps {
    amount: number
    handleAmount: (e: number) => void
}

const Body: React.FC<IProps> = ({amount, handleAmount}) => {

    // @ts-ignore
    let {uuid} = useParams();

    return (
        <div
            className="container customer-rounded sm:max-w-screen-lg md:max-w-screen-xl flex-col lg:flex md:flex-row sm:flex-col pb-6">
            <Customer uuid={uuid}/>
            <Tip amount={amount} handleAmount={handleAmount} uuid={uuid}/>
        </div>
    )

}

export default Body
