import React, {useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router";

const Customer: React.FC = () => {

    let [customer, setCustomer] = React.useState({name: "", imageUrl: "", place: ""})

    let uuid = useParams();
    console.log("UUID: ", uuid)

    useEffect(() => {
        axios
            .post("https://quiet-platform-317414.uc.r.appspot.com/customer", uuid)
            .then((response) => {
                console.log("Response: ", response);
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log("No customer: ", error);
            });
    }, []);

    return (<div className="
    lg:max-h-full lg:w-1/4
    lg:items-center
    lg:mt-0
    border-solid shadow-2xl rounded-lg
    flex flex-row-reverse
    justify-center lg:flex-col md:flex-row sm:flex-row
    space-y-6
    space-x-6
    mt-10
    ">
        <img
            className="img-rounded border-2 border-yellow-600 w-32 h-32"
            src={customer.imageUrl}
            alt=""
        />
        <div className="flex flex-col space-y-6 space-x-6">
            <span className="text-2xl text-white">
                {customer.name}
            </span>
            <span className="text-lg text-gray-300">
            {customer.place}
            </span>
        </div>

    </div>)
}
export default Customer
