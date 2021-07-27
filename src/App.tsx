import React from 'react';
import Body from './components/body/Body';
import Header from "./components/header/Header";
import {Route} from "react-router";
import Tip from "./components/body/tip/Tip";
import Payment from "./components/payment/Payment";

function App() {
    return (
        <div className="h-screen w-screen bg-gray-800 pb-10">




            <Route path="/:uuid" exact>
                <Header/>
                <Tip/>
            </Route>
            <Route path="/:uuid/payment" exact>
                <Header/>
                <Payment/>
            </Route>
        </div>
    )
}

export default App;
