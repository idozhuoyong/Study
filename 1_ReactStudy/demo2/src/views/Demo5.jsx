import React, { useState } from "react";
import { Button } from 'antd';
import './Demo.less';

const Demo = function Demo(props) {
    // 当初始值逻辑比较复杂时，我们对初始值进行惰性化处理，只有第一次执行函数，以后组件更新，这样的逻辑不在执行
    let [num, setNum] = useState(() => {
        let { x, y } = props,
        total = 0;
        for (let i = x; i <= y; i++) {
            total += +String(Math.random()).substring(2);
        }
        return total;
     });

    let handle = () => {
        setNum(1000);
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