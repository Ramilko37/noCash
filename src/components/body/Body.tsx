import React from 'react';
import Customer from "./customer/Customer";
import Tip from "./tip/Tip";


const Body: React.FC = () =>

    <div className="container bg-gray-700 h-5/6 rounded-large flex lg:flex-row md:flex-col sm:flex-col">
        <Customer/>
        <Tip/>
    </div>
export default Body


