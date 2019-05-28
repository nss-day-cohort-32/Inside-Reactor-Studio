import React from 'react';
import ReactDOM from 'react-dom';
import Nutshell from './components/Nutshell';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Nutshell />
  </Router>,
  document.getElementById('root')
);
