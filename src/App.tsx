import React, {useState} from 'react';
import Body from './components/payment/Body';
import {Route} from "react-router";
import Payment from "./components/payment/Payment";
import Customers from "./components/body/customers/Customers";

interface IProps {
    name: string
    place: string
    imageUrl: string
    uuid: string
}

function App() {

    const [checked, setChecked] = useState(false);
    let [amount, setAmount] = React.useState(5);
    let [customer, setCustomer] = React.useState({name: "", place: "", imageUrl: "", uuid: ""});

    const handleChecked = () => {
        let oldAmount = amount;
        if (checked) {
            setChecked(!checked);
            handleAmount(amount + (amount * 0.05));
        } else if (!checked) {
            handleAmount(oldAmount);
            setChecked(checked)
        }
    }

    const handleAmount = (a: number) => {
        setAmount(a)
    }

    const handleCustomer = (customer: IProps) => {
        setCustomer(customer)
    }

    return (
        <div className="h-auto w-screen pb-10">
            <Route path="/customers/" exact>
                <Customers handleCustomer={handleCustomer}/>
            </Route>
            <Route path="/customer/:uuid" exact>
                <Body amount={amount}
                      handleAmount={handleAmount}
                      checked={checked}
                      handleChecked={handleChecked}
                      customer={customer}/>
            </Route>
            <Route path="/customer/payment/:uuid" exact>
                <Payment amount={amount}/>
            </Route>
        </div>
    )
}

export default App;
