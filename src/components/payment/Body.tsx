import React from 'react';
import Customer from "../body/customer/Customer";
import Tip from "../body/tip/Tip";

interface ICustomer {
    name: string
    place: string
    imageUrl: string
    uuid: string
}


interface IProps {
    amount: number
    handleAmount: (e: number) => void
    checked: boolean
    handleChecked: () => void
    customer: ICustomer
}

const Body: React.FC<IProps> = ({amount, handleAmount, checked, handleChecked, customer}) => {

    return (
        <div
            className="container customer-rounded sm:max-w-screen-lg md:max-w-screen-xl
            lg:w-10/12
            flex-col lg:flex md:flex-row sm:flex-col pb-6">
            <Customer name={customer.name} place={customer.place} imageUrl={customer.imageUrl} uuid={customer.uuid}/>
            <Tip amount={amount} handleAmount={handleAmount} uuid={customer.uuid} checked={checked}
                 handleChecked={handleChecked}/>
        </div>
    )

}

export default Body
