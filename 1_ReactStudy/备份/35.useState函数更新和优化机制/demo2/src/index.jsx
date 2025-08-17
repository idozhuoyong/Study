import React from 'react';
import ReactDOM from 'react-dom/client';
// import Demo from './views/Demo1';
// import Demo from './views/Demo2';
// import Demo from './views/Demo3';
// import Demo from './views/Demo4';
import Demo from './views/Demo5';
// import Vote from './views/Vote';
// import Task from './views/Task';
/* 使用ANTD组件库 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        <Demo x={10} y={20} />
        {/* <Vote title="React学好则需要JS功底" /> */}
    </ConfigProvider>
);