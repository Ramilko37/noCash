import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Customer from "./customer/Customer";
import Tip from "./tip/Tip";

const Body: React.FC = () =>

    <div className="container bg-gray-700 rounded-large sm:max-w-screen-lg md:max-w-screen-xl flex-col lg:flex md:flex-row sm:flex-col pb-6">
        <Switch>
            <Route exact path="/1">
                <Customer />
                <Tip/>
            </Route>
            <Route exact path="/">
                <Tip/>
            </Route>
        </Switch>
    </div>
export default Body
