import React from "react";
import {I18n} from "react-polyglot-hooks";
import App from "./App";
import Header from "./components/header/Header";


const LanguageWrapper: React.FC = () => {
    // @ts-ignore
    const locale = window.locale || 'en';
    const phrases: any = {
        en: {hello: 'Hello, World!', rate: "Rate the service"},
        est: {hello: 'Bonjour, Monde!', rate: "Hinda teenust"},
    };

    let [language, setLanguage] = React.useState(locale);

    const handleLanguage = (language: string) => {
        setLanguage(language);
    }

    console.log(locale);

    const toggleLanguage = () => {
        if (locale === 'en') {
            setLanguage(!language);
            console.log(locale)
        }
        console.log(language)
    }

    return (
        <I18n locale={locale} phrases={phrases[language]}>
            <Header handleLanguage={handleLanguage} toggleLanguage={toggleLanguage}/>
            <App/>
        </I18n>
    )
}

export default LanguageWrapper;
