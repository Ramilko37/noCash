import React from 'react';
import Customer from "../body/customer/Customer";
import Tip from "../body/tip/Tip";
import {useParams} from "react-router";


interface IProps {
    amount: number
    handleAmount: (e: number) => void
    checked: boolean
    handleChecked: () => void
}

const Body: React.FC<IProps> = ({amount, handleAmount, checked, handleChecked}) => {

    // @ts-ignore
    let {uuid} = useParams();
    let data = useParams();

    return (
        <div
            className="container customer-rounded sm:max-w-screen-lg md:max-w-screen-xl
            lg:w-10/12
            flex-col lg:flex md:flex-row sm:flex-col pb-6">

            <Customer uuid={data}/>
            <Tip amount={amount} handleAmount={handleAmount} uuid={uuid} checked={checked} handleChecked={handleChecked}/>
        </div>
    )

}

export default Body
