import React, {useState} from 'react';
import Body from './components/payment/Body';
import Header from "./components/header/Header";
import {Route} from "react-router";
import Payment from "./components/payment/Payment";
import Customers from "./components/body/customers/Customers";
import {I18n} from "react-polyglot-hooks";

interface IProps {
    name: string
    place: string
    imageUrl: string
    uuid: string
}


function App() {
    // @ts-ignore
    const locale = window.locale || 'en';
    const phrases: any = {
        en: {hello: 'Hello, World!', rate: "Rate the service"},
        est: {hello: 'Bonjour, Monde!', rate: "Hinda teenust"},
    };

    const [checked, setChecked] = useState(false);
    let [amount, setAmount] = React.useState(5);
    let [customer, setCustomer] = React.useState({name: "", place: "", imageUrl: "", uuid: ""});
    let [language, setLanguage] = React.useState(locale);

    const handleChecked = () => {
        let oldAmount = amount;
        console.log(oldAmount);
        console.log(!checked);
        if (checked) {
            setChecked(!checked);
            handleAmount(amount + (amount * 0.05));
        } else if (!checked) {
            handleAmount(oldAmount);
            setChecked(checked)
        }
        console.log(!checked);
    }

    const handleAmount = (a: number) => {
        setAmount(a)
    }


    const handleLanguage = (language: string) => {
        setLanguage(language)
    }

    const handleCustomer = (customer: IProps) => {
        console.log(customer);
        setCustomer(customer)
    }

    return (
        <I18n locale={locale} phrases={phrases[language]}>
            <div className="h-auto w-screen pb-10">
                <Route path="/customers/" exact>
                    <Header handleLanguage={handleLanguage}/>
                    <Customers handleCustomer={handleCustomer}/>
                </Route>
                <Route path="/customer/:uuid" exact>
                    <Header handleLanguage={handleLanguage}/>
                    <Body amount={amount}
                          handleAmount={handleAmount}
                          checked={checked}
                          handleChecked={handleChecked}
                          customer={customer}/>
                </Route>
                <Route path="/customer/payment/:uuid" exact>
                    <Header handleLanguage={handleLanguage}/>
                    <Payment amount={amount}/>
                </Route>
            </div>
        </I18n>
    )
}

export default App;
