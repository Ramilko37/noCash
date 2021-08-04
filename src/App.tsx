import React, {useState} from 'react';
import Body from './components/payment/Body';
import Header from "./components/header/Header";
import {Route} from "react-router";
import Payment from "./components/payment/Payment";

function App() {
    const [checked, setChecked] = useState(false);
    let [amount, setAmount] = React.useState(5);

    const handleChecked = () => {
        let oldAmount = amount;
        console.log(oldAmount);
        console.log(!checked);
        if (checked) {
            setChecked(!checked);
            handleAmount(amount + (amount * 0.05));
        }
        else if (!checked) {
            handleAmount(oldAmount);
            setChecked(checked)
        }
        console.log(!checked);
    }



    const handleAmount = (a: number) => {
        setAmount(a)
    }



    return (

        <div className="h-auto w-screen pb-10">
            <Route path="/customer/:uuid" exact>
                <Header/>
                <Body amount={amount} handleAmount={handleAmount} checked={checked} handleChecked={handleChecked}/>
            </Route>
            <Route path="/customer/payment/:uuid" exact>
                <Header/>
                <Payment amount={amount}/>
            </Route>
        </div>
    )
}

export default App;
