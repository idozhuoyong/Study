import React, { useState, useCallback } from "react";
import { Button } from "antd";
import './Demo.less'

// 类子组件
// class Child extends React.PureComponent {
//     render() {
//         console.log('child render');
//         return <div>我是子组件</div>
//     }
// }
// 函数子组件
const Child = React.memo(function Child() {
    console.log('child render');
    return <div>我是子组件</div>
})

// 父组件
const Demo = function Demo() {
    let [x, setX] = useState(0);

    // const handle = () => { };  //
    const handle = useCallback(() => { }, []);
    
    return <div className="vote-box">
        <Child handle={handle} />
        <div className="main">
            <p>{x}</p>
        </div>
        <div className="footer">
            <Button type="primary" onClick={() => setX(x + 1)}>累加</Button>
        </div>
    </div>
}

// let prev;
// const Demo = function Demo() {
//     let [x, setX] = useState(0);

//     /*
//         const xxx useCallback(callback, [dependencies]);
//             + 组件第一次渲染，useCallback执行，创建一个函数“callback”，赋值给xxx
//             + 组件后续更新，判断依赖的状态值是否改变，如果改变，则重新创建新的函数，赋值给xxx；如果依赖状态没有更新「或者没有设置依赖"[]"」则 xxx 获取的一直是第一次创建的函数，不会创建新的函数
//             + 或者说，基于useCallback，可以始终获取第一次创建函数的堆内存地址「或者说函数的引用」
//      */
//     const handle = useCallback(() => {
//         // ...
//     }, []);
//     if (!prev) { 
//         prev = handle;
//     } else {
//         console.log(prev === handle);
//     }
    
//     return <div className="vote-box">
//         <div className="main">
//             <p>{x}</p>
//         </div>
//         <div className="footer">
//             <Button type="primary" onClick={() => setX(x + 1)}>累加</Button>
//         </div>
//     </div>
// }

export default Demo;