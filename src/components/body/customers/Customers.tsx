import React, {useEffect, useState} from 'react';
import axios from "axios";
import Customer from "../customer/Customer";
import {Link} from "react-router-dom";
import {T, useLocale} from "react-polyglot-hooks";
import {
    TailSpin
} from '@agney/react-loading';


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
            // .get("http://localhost:8080/customers")
            .get("https://nocash-319015.ew.r.appspot.com/customers")
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

        return <div className="w-full h-full flex-col place-content-center pt-40">
            <div className="flex text-white text-lg place-content-center">
                {/*// @ts-ignore*/}
                <TailSpin width="100"/>
            </div>
        </div>;
    } else {
        return (
            <div className="w-full h-full flex-col justify-center ">
                <div className="flex text-white text-lg place-content-center space-x-4 p-4">
                    <span> StarBucks </span>
                    <img
                        className="img-rounded  w-6 h-6"
                        src="https://storage.googleapis.com/nocash.me/star.webp"
                        alt=""
                    />
                </div>
                {customers.map((e: IProps) => {
                    return (
                        <div className="m-1 cursor-pointer hover:bg-gray-800" onClick={() => handleCustomer(e)}>
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
