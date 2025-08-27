import React, { useState, useEffect } from "react";
import { Button } from 'antd';
import './Demo.less';

/*
useEffect：在函数组件中，使用生命周期函数
    useEffect(callback):
        + 第一次渲染完毕后，执行callback，类似于 componentDidMount
        + 在组件每一次更新完毕后，也会执行callback，类似于 componentDidUpdate
    useEffect(callback, []):
        + 只有第一次渲染完毕后，执行callback，类似于 componentDidMount
        + 在组件每一次更新完毕后，不在执行callback
    useEffect(callback, [依赖的状态「多个状态用逗号分隔」]):
        + 第一次渲染完毕后，执行callback，等价于 componentDidMount
        + 当依赖的状态值（或多个依赖状态中的一个）发生改变，也会执行callback
        + 但是依赖的状态如果没有变化，在组件更新的时候，callback是不会执行的
    
    useEffect(() => {
        return () => {
            // 返回的小函数，会在组件释放的时候执行
            // 如果组件更新，会把上一次返回的小函数执行
        };
    }):
        + 类似于 componentWillUnMount
*/
const Demo = function Demo() {
    let [num, setNum] = useState(0),
        [x, setX] = useState(100);

    useEffect(() => { 
        console.log('@1', num); // 能够获取最新状态值
    })

    useEffect(() => { 
        console.log('@2', num); 
    }, [])

    useEffect(() => { 
        console.log('@3', num); 
    }, [num])

    useEffect(() => { 
        return () => {
            console.log('@4', num);
        };
    }, [num])

    const handle = () => {
        setNum(num + 1);
    };

    return <div className="demo">
        <span className="num">{num}</span>
        <Button
            type="primary"
            size="small"
            onClick={handle}>
            新增
        </Button>
    </div>;
};

export default Demo;