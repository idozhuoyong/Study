import React, { useState, useEffect, useRef } from "react";
import { Button } from 'antd';
import './Demo.less';

let prev1,
    prev2;
const Demo = function Demo() {    
    let [num, setNum] = useState(0);

    // 「不推荐使用」
    // 基于“ref={函数}”的方式，可以把创建的DOM元素「子组件实例」赋值给box变量
    // <span className="num" ref={x => box = x}>{num}</span>
    // let box;
    // useEffect(() => {
    //     console.log(box);
    // }, []);

    // 「不推荐使用」
    // 基于React.createRef创建ref对象来获取想要的内容
    // <span className="num" ref={box}>{num}</span>
    // let box = React.createRef();
    // useEffect(() => {
    //     console.log(box.current);
    // }, []);
    
    // 函数组件中，还可以基于useRef Hook函数，创建一个Ref对象
    // let box = useRef(null);
    // useEffect(() => {
    //     console.log(box.current);
    // }, []);

    let box1 = useRef(null),
        box2 = React.createRef();
    
    if (!prev1) {
        prev1 = box1;
        prev2 = box2;
    } else {
        // useRef在每一次组件更新的时候（函数重新执行），再次执行 useRef 方法的时候，不会创建新的 REF 对象了
        // React.createRef() 在每一次组件更新时，都会创建一个全新的 REF 对象，比较浪费性能
        console.log(prev1 == box1); // true
        console.log(prev2 == box2); // false
    }

    return <div className="demo">
        {/* <span className="num" ref={x => box = x}>{num}</span> */}
        {/* <span className="num" ref={box}>{num}</span> */}
        <span className="num" ref={box1}>{num}</span>
        <span className="num" ref={box2}>哈哈</span>
        <Button
            type="primary"
            size="small"
            onClick={() => { 
                setNum(num + 1)
            }}>
            新增
        </Button>
    </div>;
};

export default Demo;