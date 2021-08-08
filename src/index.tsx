import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import LanguageWrapper from "./LanguageWrapper";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <LanguageWrapper/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
