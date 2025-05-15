import React from 'react';
import ReactDOM from 'react-dom/client';
import { createElement, render } from './jsxHandle'

const root = ReactDOM.createRoot(document.getElementById('root'));

let styObj = {
  color: 'red',
  fontSize: '16px'
}
let x = 10;
let y = 20;

// root.render(
//   <div className='container'>
//     <h2 className='title' indexkey="indexValue" style={styObj}>学习</h2>
//     <div className="box">
//       <span>{x}</span>
//       <span>{y}</span>
//     </div>
//   </div>
// )

let jsxObj = createElement(
  "div",
  { className: "container" },
  createElement(
    "h2",
    { className: "title", style: styObj, indexkey: "indexValue" },
    "学习"
  ),
  createElement(
    "div",
    { className: "box" },
    createElement("span", null, x),
    createElement("span", null, y)
  )
)

render(jsxObj, document.getElementById("root"));

