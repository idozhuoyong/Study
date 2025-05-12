import React from 'react';
import ReactDOM from 'react-dom/client';
import { createElement } from './jsxHandle'

const root = ReactDOM.createRoot(document.getElementById('root'));

let styObj = {
  color: 'red',
  fontSize: '16px'
}
let x = 10;
let y = 20;

root.render(
  <>
    <h2 className='title' style={styObj}>学习</h2>
    <div className="box">
      <span>{x}</span>
      <span>{y}</span>
    </div>
  </>
)


console.log(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h2",
    { className: "title", style: styObj },
    "学习"
  ),
  React.createElement(
    "div", 
    { className: "box" },
    React.createElement("span", null, x),
    React.createElement("span", null, y)
  )
))

console.log('----分割线-----');
console.log(createElement(
  React.Fragment,
  null,
  createElement(
    "h2",
    { className: "title", style: styObj },
    "学习"
  ),
  createElement(
    "div", 
    { className: "box" },
    createElement("span", null, x),
    createElement("span", null, y)
  )
))


console.log('----分割线-----');
console.log(
  React.createElement("div", null)
);
