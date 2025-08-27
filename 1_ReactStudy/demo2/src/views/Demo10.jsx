import React, { useState, useEffect, useRef, useImperativeHandle } from "react";
import { Button } from 'antd';
import './Demo.less';


// 基于 ref 获取子组件实例，基于实例可以调用子组件内部，挂载到实例上的东西
// class Child extends React.Component {
//     state = { x: 1000 };
//     render() {
//         return <div className="child-box">
//             {this.state.x}
//         </div>
//     }
// }

// // 基于 forwardRef 实现ref转发，目的：获取子组件内部的某个元素
// const Child = React.forwardRef(function Child(props, ref) {
//     return <div className="child-box">
//         <span ref={ref}>哈哈哈</span>
//     </div>
// });

// 父组件如何获取函数子组件的 text 和 submit？
const Child = React.forwardRef(function Child(props, ref) {
    let [text, setText] = useState('你好世界');
    const submit = () => { };

    useImperativeHandle(ref, () => { 
        return {
            text,
            submit
        }
    })

    return <div className="child-box">
        <span>哈哈哈</span>
    </div>
});

const Demo = function Demo() {    
    let x = useRef(null);

    useEffect(() => {
        console.log(x.current);
    });

    return <div className="demo">
        <Child ref={x} />
    </div>;
};

export default Demo;