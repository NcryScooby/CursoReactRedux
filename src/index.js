import './index.css';
import reactDom from 'react-dom';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';


reactDom.render(
    <div>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
)