import React, { useState } from "react";
import { Button } from 'antd';
import './Demo.less';

/*
useState: React Hook函数之一，目的是在函数组件中使用状态，并且后期基于状态的修改，可以让组件更新
    let [num, setNum] = useState(initialValue)
        + 执行useState，传递 initialValue是初始的状态值
        + 执行这个方法，返回结果是一个数组：[状态值，修改状态的方法]
            + num变量存储的是：获取的状态值
            + setNum变量存储的是：修改状态的方法
        + 执行setNum(value)
            + 修改状态值为 value
            + 通知视图更新
    函数组件「或者Hooks组件」不是类组件，所以没有实例的概念「调用组件不再是创建类的实例，而是把函数执行，产生一个私有上下文」，在函数组件中不涉及this的处理
 */
const Demo = function Demo() {
    let [num, setNum] = useState(10);
    let handleAddClick = () => {
        setNum(num + 2);
    };
    return <div className="demo">
        <span className="num">{num}</span>
        <Button type="primary" size="small" onClick={handleAddClick}>新增</Button>
    </div>;
};

export default Demo;