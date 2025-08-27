import React, { useState } from "react";
import { Button } from 'antd';
import './Demo.less';

/*
函数组件的每一次渲染（或者是更新），都是函数重新执行，产生一个全新的“私有上下文”！
    + 内部的代码也需要重新执行
    + 涉及的函数需要重新的构建「这些函数的作用域，是每一次执行函数产生的闭包」
    + 每一次执行DEMO函数，也会把useState重新执行，但是：
        + 执行useState，只有第一次，设置的初始值会生效，其余以后再执行，获取的状态都是最新的状态值「而不是初始值」
        + 返回的修改状态的方法，每一次都是返回一个新的

var _state;
function useState(initialValue) {
    if (typeof _state === "undefined") _state = initialValue;
    var setState = function setState(value) { 
        _state = value;
        // 通知视图更新
    }
    return [_state, setState];
}
*/
        
const Demo = function Demo() {
    let [num, setNum] = useState(0);

    let handleAddClick = () => {
        setNum(100);
        setTimeout(() => {
            console.log(num); // 0
        }, 2000);
    };

    return <div className="demo">
        <span className="num">{num}</span>
        <Button type="primary" size="small" onClick={handleAddClick}>新增</Button>
    </div>;
};

export default Demo;