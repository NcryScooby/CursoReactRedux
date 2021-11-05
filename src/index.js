import reactDom from 'react-dom';
import React from 'react';

const tag = <strong>Olá, React!</strong>

reactDom.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)