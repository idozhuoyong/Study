import React from "react";
import ReactDOM from 'react-dom/client';
// import Demo from './views/Demo1';
// import Demo from './views/Demo2';
// import Demo from './views/Demo3';
// import Vote from './views/classDemo/Vote'
// import Vote from './views/funcDemo/Vote'
// import Vote from './views/classContextDemo/Vote'
// import Vote from './views/funcContextDemo/Vote'
// import App from "./views/App";
import Vote from "./views/reduxDemo1a/Vote";
/* 使用ANTD组件库 */
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import './index.less';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider locale={zhCN}>
        {/* <Demo /> */}
        <Vote />
        {/* <App /> */}
    </ConfigProvider>
);