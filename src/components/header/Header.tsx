import React, {FunctionComponent} from 'react';
import logo from '../../img/svg/logo.svg';
import Select from 'react-select';
import {Fragment} from 'react';

const languages = [
    {value: "en", label: "en"},
    {value: "est", label: "est"}
];

interface IProps {
    handleLanguage: (l: string) => void
}

const Header: React.FC<IProps> = ({handleLanguage}) =>
    <div className="flex justify-center p-4 w-full">
        <div className="justify-self-center place-content-center">
            <img src={logo} alt="NoCash"/>
        </div>
        <Fragment>
            <Select
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

