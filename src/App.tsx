import React from 'react';
import Body from './components/body/Body';
import Header from "./components/header/Header";
import {Route} from "react-router";
import Tip from "./components/body/tip/Tip";
import Payment from "./components/payment/Payment";

function App() {
    return (
        <div className="h-screen w-screen mx-auto pb-10 bg-dark">
            <div  className="body-width pb-10 backgroundImage">
                <Route path="/:uuid" exact>
                    <Header/>
                    <Body/>
                </Route>
            </div>



            {/*<Route path="/:uuid" exact>*/}
            {/*    <Header/>*/}
            {/*    <Tip/>*/}
            {/*</Route>*/}
            {/*<Route path="/:uuid/payment" exact>*/}
            {/*    <Header/>*/}
            {/*    <Payment/>*/}
            {/*</Route>*/}


        </div>
    )
}

export default App;
