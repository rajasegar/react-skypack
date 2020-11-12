import ReactDOM from 'react-dom';
import React from 'react';
import htm from 'htm';
import App from './components/App.js';

const html = htm.bind(React.createElement);

ReactDOM.render(html`<${App}/>`, document.getElementById('app'))
