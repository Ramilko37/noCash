import React, {useState} from 'react';
import Body from './components/payment/Body';
import Header from "./components/header/Header";
import {Route} from "react-router";
import Payment from "./components/payment/Payment";

function App() {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
        handleAmount(amount + (amount*0.05));

        if (checked) {
            handleAmount(amount );
        }
        console.log(!checked);
    }

    let [amount, setAmount] = React.useState(5)
    const handleAmount = (a: number) => {
        if (!checked) {
            setAmount(a + 1)
        }
        {setAmount(a)}
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
