import React, { useState, useEffect } from "react";
import { Button } from 'antd';
import './Demo.less';

// 模拟从服务器异步获取数据
const queryData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([10, 20, 30]);
        }, 1000);
    });
}

const Demo = function Demo() {
    let [num, setNum] = useState(0);

    // useEffect必须在函数的最外层上下文中调用，不能把其嵌入到判断、循环等操作语句中
    // if (num > 5) {
    //     useEffect(() => {
    //         console.log('OK');
    //     })
    // }
    
    useEffect(() => {
        if (num > 5) {
            console.log('OK');
        }
    }, [num]);

    // 第一次渲染完毕后，从服务器异步获取数据
    // useEffect如果设置返回值，则返回值必须是一个函数「组件销毁时触发」；下面案例中，callback 经过 async 修饰，返回的是一个promise实例，不符合要求
    // 错误写法
    // useEffect(async () => {
    //     let data = await queryData();
    //     console.log('成功', data);
    // }, []);
    // 替代方式一
    // useEffect(() => {
    //     queryData().then((data) => {
    //         console.log('成功', data);
    //     })
    // }, []);
    // 替代方式二
    // useEffect(() => { 
    //     const next = async () => {
    //         let data = await queryData();
    //         console.log('成功', data);
    //     };
    //     next();
    // }, []);
    
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