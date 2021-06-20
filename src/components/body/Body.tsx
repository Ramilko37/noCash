import React from 'react';
import Customer from "./customer/Customer";
import Tip from "./tip/Tip";

const Body: React.FC = () =>

    <div className="container bg-gray-700 rounded-large flex-col lg:flex md:flex-row sm:flex-col pb-6">
        <Customer/>
        <Tip/>
    </div>
export default Body
