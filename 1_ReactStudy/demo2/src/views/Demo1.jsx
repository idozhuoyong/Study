import React, { useState } from "react";
import { Button } from 'antd';
import './Demo.less';

/*
    useState: React Hook函数之一，目的是在函数组件中使用状态，并且后期基于状态的修改，可以让组件更新
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