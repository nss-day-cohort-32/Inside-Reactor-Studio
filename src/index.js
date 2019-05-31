import React from 'react';
import ReactDOM from 'react-dom';
import Nutshell from './components/Nutshell'
import Header from './components/layout/Header'
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
    <Router>
        <Header/>
        <Nutshell />
    </Router>
    , document.getElementById('root'));
