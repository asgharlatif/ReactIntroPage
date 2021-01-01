import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './mycssfile.css'

import reportWebVitals from './reportWebVitals';
/*
ReactDOM.render(  
  React.createElement('div',null,React.createElement ('span',null,"Hello World SPAN with react create element.")) ,
  document.getElementById('root')
);
*/

ReactDOM.render(
<div>
  <App name="Zia Khan" age = {25}/>

</div>
  ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
