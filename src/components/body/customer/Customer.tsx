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
    mt-0
    items-start
    border-solid shadow-2xl rounded-lg
    flex flex-row-reverse
    lg:flex-col md:flex-row sm:flex-row
    space-y-6
    space-x-6
    mt-10
    ">
        <img
            className="ml-12 mr-5 lg:ml-0 img-rounded border-2 border-yellow-600 w-32 h-32"
            src={customer.imageUrl}
            alt=""
        />
        <div className="flex flex-col m-0">
            <span className="text-2xl text-white">
               Ramil Galyamdin
            </span>
            <span className="text-lg text-gray-300">
            Cosmo Trooper
            </span>
        </div>

    </div>)
}
export default Customer
