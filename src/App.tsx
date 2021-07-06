import React from 'react';
import Body from './components/body/Body';
import Header from "./components/header/Header";
import {Route} from "react-router";

function App() {
    return (
        <div className="h-screen w-screen bg-gray-800 pb-10">

            <Route path="/:uuid" exact>
                <Header/>
                <Body/>
            </Route>
        </div>
    )
}

export default App;
