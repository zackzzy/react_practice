import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";

const Vdom = (
  <App/>
  
)


// const func = (n) =>{
//   for (let i = 1; i <= n; i++) {
//     if(i%3 === 0 && i%5 !== 0){
//       console.log('aaa')
//     } else if (i%5 === 0 && i%3 !== 0) {
//       console.log("bbb")
//     } else if (i%3 === 0 && i%5 === 0){
//       console.log("aaabbb")
//     } else {
//       console.log(i)
//     }
    
//   }

// }

// func(20)

ReactDOM.render(
  Vdom,
  document.getElementById('root')
);


