import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoOne from '@/views/DemoOne1';
// import { createElement, render } from './jsxHandle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        {/* 单闭合调用 */}
        {/* <DemoOne title="标题" x={10} data={[100, 200]} className="box" style={{ fontSize: "20px" }} /> */}
        {/* 双闭合调用 */}
        <DemoOne title="标题1" x={10} data={[100, 200]} className="box" style={{ fontSize: "20px" }}>
            <span>呵呵</span>
            <span>哈哈</span>
        </DemoOne>

        <DemoOne title="标题2" x='10'>
            <span>呵呵</span>
            <span>哈哈</span>
        </DemoOne>
    </>
)

// let obj = {
//     x: 10,
//     y: 20
// }
// Object.preventExtensions(obj)
// console.log(Object.isExtensible(obj));
// obj.x = 100;
// // obj.z = 300;
// // delete obj.y;
// // Object.defineProperty(obj, 'x', {
// //     set() {},
// //     get() { }
// // })
// console.log(obj)


// let jsxObj = createElement(
//     DemoOne,
//     {
//         title: "标题",
//         x: 10,
//         data: [100, 200],
//         className: "box",
//         style: {
//             fontSize: "20px"
//         }
//     },
//     createElement(
//         'span',
//         null,
//         "呵呵"
//     ),
//     createElement(
//         'span',
//         null,
//         "哈哈"
//     ),
// )
// console.log(jsxObj)
// render(jsxObj, document.getElementById("root"))

