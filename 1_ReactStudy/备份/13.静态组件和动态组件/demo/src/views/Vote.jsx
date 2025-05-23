/*
创建类组件
    + 创建一个构建函数(类)，要求必须集成 React.Component/PureComponent 这个类
        + 我们习惯于使用 ES6 中的 class 创建类「因为方便」
        + 必须给当前类设置一个 render 方法「放在其原型上」：render 方法中，返回需要渲染的视图

*/
import React from "react";

class Vote extends React.Component { 
    render() { 
        return <div className="vote-box">
        <div className="header">
            <h2 className="title">标题</h2>
            <span>15人</span>
        </div>
        <div className="main">
            <p>支持人数：10人</p>
            <p>反对人数：5人</p>
        </div>
        <div className="footer">
            <button onClick={() => { 
                // supNum++;
            }}>支持</button>
            <button onClick={() => { 
                // oppNum++;
            }}>反对</button>
        </div>
    </div>
    }
}
export default Vote