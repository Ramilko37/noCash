import React, {FunctionComponent} from 'react';
import logo from '../../img/svg/logo.svg';
import Select from 'react-select';
import {Fragment} from 'react';

const languages = [
    {value: "en", label: "En"},
    {value: "est", label: "Est"}
];

interface IProps {
    handleLanguage: (l: string) => void
}
const customStyles = {
    option: () => ({
        borderBottom: '0px',
    }),
    control: () => ({
        width: 100,
        display: 'flex',
        color: 'white',
        padding: '10px',
        background: 'transparent'
    }),
    menu: () => ({
        width: 100,
        display: 'flex',
        color: 'white',
        padding: '10px',
        border: '1px solid white',
        background: 'transparent'
    }),
    singleValue: () => {
        const opacity = 0.5;
        const transition = 'opacity 300ms';
        const background = 'transparent'
        return {opacity, transition, background};
    }
}
const Header: React.FC<IProps> = ({handleLanguage}) =>
    <div className="flex justify-center p-4 w-full">
        <div className="justify-self-center place-content-center">
            <img src={logo} alt="NoCash"/>
        </div>
        <Fragment>
            <Select
                styles={customStyles}
                className="basic-single"
                classNamePrefix="select"
                defaultValue={languages[1]}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                name="language"
                options={languages}
                onChange={(e) => handleLanguage(e ? e.value : "en")}
            />
        </Fragment>
    </div>
export default Header

