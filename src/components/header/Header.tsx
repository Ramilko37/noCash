import React, {FunctionComponent} from 'react';
import logo from '../../img/svg/logo.svg';
import Select from 'react-select';
import {Fragment} from 'react';
import {ReactComponent as Toggle} from "../../img/svg/toggle_lang.svg";
import styles from './styles.module.css';

const languages = [
    {value: "en", label: "En"},
    {value: "est", label: "Est"}
];

interface IProps {
    handleLanguage: (l: string) => void
    toggleLanguage: any;
}

const customStyles = {
    option: () => ({
        borderBottom: '0px',
        color: 'white',
    }),
    control: () => ({
        width: 100,
        display: 'flex',
        color: 'white',
        paddingRight: 10,
        background: 'transparent',
    }),
    menu: () => ({
        width: 100,
        display: 'flex',
        color: 'gray',
        paddingLeft: 10,
        background: 'transparent',
        zIndex: 100,
        marginRight: 10,

    }),
    singleValue: () => {
        const opacity = 0.5;
        const transition = 'opacity 300ms';
        const background = 'transparent';
        const color = 'white';

        return {opacity, transition, background};
    },
    buttonStyle: () => {

        const background = 'none';
        const color = 'inherit';
        const border = 'none';
        const  padding = 0;
        const font = 'inherit';
        const  cursor = 'pointer';
        const  outline = 'inherit';

        return {background, color, border, padding, font, cursor, outline};

    }
}


const Header: React.FC<IProps> = ({handleLanguage, toggleLanguage}) =>
    <div className={styles.header}>
        {/*<div className="justify-self-center place-content-center">*/}
            <img src={logo} alt="NoCash"/>

        <div className={styles.languageWrapper}>
            {languages[0].value === 'en'
                ?
                <p className={styles.language}>
                    {languages[0].label}
                </p>
                :
                <p className={styles.language}> {languages[1].label}</p> }

                <button className={styles.buttonStyle} onClick={toggleLanguage}>
                <Toggle/>
            </button>
        </div>




            {/*<Select*/}
            {/*    className="z-100 w-20 mr-10 absolute right-100"*/}
            {/*    classNamePrefix="select"*/}
            {/*    styles={customStyles}*/}
            {/*    defaultValue={languages[1]}*/}
            {/*    isDisabled={false}*/}
            {/*    isLoading={false}*/}
            {/*    isClearable={false}*/}
            {/*    isRtl={false}*/}
            {/*    isSearchable={false}*/}
            {/*    name="language"*/}
            {/*    options={languages}*/}
            {/*    // onChange={(e) => handleLanguage(e ? e.value : "en")}*/}
            {/*/>*/}








    </div>
export default Header

