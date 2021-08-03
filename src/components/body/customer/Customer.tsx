import React, {useEffect} from 'react';
import axios from "axios";

interface IProps {
    uuid: string
}

const Customer: React.FC<IProps> = ({uuid}) => {

    let [customer, setCustomer] = React.useState({name: "", imageUrl: "", place: ""})
    useEffect(() => {
        axios
            .post("https://nocash-319015.ew.r.appspot.com/customer", uuid)
            .then((response) => {
                console.log("Response: ", response);
                setCustomer(response.data);
            })
            .catch((error) => {
                console.log("No customer: ", error);
            });
    }, []);

    return (<div className="
    h-24
    sm:h-36
    w-full
    sm:w-10/12
    lg:w-2/5
    lg:h-auto
    items-start
    border-solid shadow-2xl
    flex flex-row-reverse
    lg:flex-col md:flex-row sm:flex-row
    space-y-6
    space-x-6
    rounded-3xl
    mx-auto
    relative
    z-50
    bg-gray-700
    ">
        <img
            className="ml-12 mr-5 lg:mx-auto lg:mt-16 img-rounded border-2 border-yellow-600 w-16 h-16 mt-3 mb-3 md:w-24 md:h-24"
            src={customer.imageUrl}
            alt=""
        />
        <div className="flex flex-col m-0 lg:mx-auto lg:mt-16 lg:w-44 lg:text-center">
            <span className="text-md md:text-2xl text-white">
               {/*{customer.name}*/} Nicola Bilinacacaca
            </span>
            <span className="text-lg text-gray-300">
            {/*{customer.place}*/} BucksStar
            </span>
        </div>

    </div>)
}
export default Customer
