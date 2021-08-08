import React, {useEffect, useState} from 'react';
import axios from "axios";
import Customer from "../customer/Customer";
import {Link} from "react-router-dom";
import {T, useLocale} from "react-polyglot-hooks";


interface IProps {
    name: string
    place: string
    imageUrl: string
    uuid: string
}

interface IFunc {
    handleCustomer: (e: IProps) => void
}

const Customers: React.FC<IFunc> = ({handleCustomer}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    let [customers, setCustomers] = React.useState([])

    const locale = useLocale();

    useEffect(() => {
        axios
            .get("http://localhost:8080/customers")
            .then((response) => {
                console.log("Response: ", response);
                setCustomers(response.data);
                setIsLoaded(true);
            })
            .catch((error) => {
                console.log("No customers: ", error);
            });
    }, [])

    if (error) {
        return <div>Error</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="w-full h-full flex-col justify-center ">
                <div className="flex text-white text-lg place-content-center space-x-4 p-4">
                    <span> StarBucks </span>
                </div>
                {customers.map((e: IProps) => {
                    return (
                        <div onClick={() => handleCustomer(e)}>
                            <Link to={'/customer/' + e.uuid}>
                                <Customer name={e.name} imageUrl={e.imageUrl} place={e.place} uuid={e.uuid}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}


export default Customers;
