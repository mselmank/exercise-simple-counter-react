import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let counter = 0;
setInterval(function(){

  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  console.log(four,three,two,one);
  
counter++;

  ReactDOM.render(
    
      <App digitOne={one} digitTwo={two} digitThree={three} digitFour={four}  />,
    
    document.getElementById('root')
  );

},1000);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
