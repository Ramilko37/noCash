import React, {FunctionComponent} from 'react';
import logo from '../../img/svg/logo.svg';

const Header: FunctionComponent = () =>
    <div className="flex justify-center p-6">
        <div className="justify-self-center place-content-center">
            <img src={logo} alt="NoCash"/>
        </div>
    </div>
export default Header
