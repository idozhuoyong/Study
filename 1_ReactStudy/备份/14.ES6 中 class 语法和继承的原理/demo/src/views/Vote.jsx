/*
创建类组件
    + 创建一个构建函数(类)，要求必须集成 React.Component/PureComponent 这个类
        + 我们习惯于使用 ES6 中的 class 创建类「因为方便」
        + 必须给当前类设置一个 render 方法「放在其原型上」：render 方法中，返回需要渲染的视图
*/
import React from "react";

/**
 * 基于 extends 实现继承
 *  1. 首先基于 call 继承
 *  function Component(props, context, updater) {
 *      this.props = props;
 *      this.context = context;
 *      this.refs = emptyObject;
 *      this.updater = updater || ReactNoopUpdateQueue;
 *  }
 * 
 *  2. 在基于原型继承
 * 
 *  3. 只要自己设置了 constructor，则内部第一句话一定要执行 super()
 */
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

// class Parent { 
//     // 成员变量
//     total = 0;
//     num = 200; 
//     getNum = () => { 
//         // 箭头函数没有自己的 this，所用到的 this 是宿主环境中的
//         console.log(this); // this -> 当前创建的实例        
//     }
//     // new 的时候，执行的构造函数
//     constructor(x, y) {
//         console.log(x, y);
//         this.total = x + y
//     }    
//     // 成员方法
//     sum() { }
//     // 类变量
//     static avg = 100
//     // 类方法
//     static average() {
//         console.log('average');
//     }
// }
// // 公共属性
// Parent.prototype.y = 2000;
// let p = new Parent(10, 20)
// // console.log(p);
// p.getNum()
// // console.log(Parent.avg);
// Parent.average()
