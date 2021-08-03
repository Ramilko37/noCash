import React from 'react';
import Body from './components/payment/Body';
import Header from "./components/header/Header";
import {Route} from "react-router";
import Payment from "./components/payment/Payment";

function App() {

    let [amount, setAmount] = React.useState(5)
    const handleAmount = (a: number) => {
        setAmount(a)
    }

    return (

        <div className="h-auto w-screen pb-10">
            <Route path="/customer/:uuid" exact>
                <Header/>
                <Body amount={amount} handleAmount={handleAmount}/>
            </Route>
            <Route path="/customer/payment/:uuid" exact>
                <Header/>
                <Payment amount={amount}/>
            </Route>
        </div>
    )
}

export default App;
