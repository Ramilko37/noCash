import React, {useEffect, useState} from 'react';
import axios from "axios";
import zaglushka from '../../../img/zaglushka.jpeg';
import TipButton from "../tip/tip-button/TipButton";
import Customer from "../customer/Customer";

const url = "https://nocash-319015.ew.r.appspot.com/customers";
interface IProps {
    uuid: {},
}
const Customers = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    let [customers, setCustomers] = React.useState([])


    useEffect(() => {
        fetch(url  )
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCustomers(result);
                    console.log(result.results)
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className="w-full h-full flex-col justify-center mt-20">
                {customers.map((e:IProps) => <Customer uuid={e.uuid}/>)}
            </div>


        );
    }
}




export default Customers;
