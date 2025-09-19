/*
React高阶组件：利用JS中的闭包「柯理化函数」实现的组件代理
    我们可以在代理组件中，经过业务逻辑处理，获取一些信息，最后基于属性等方案，传递给我们最终要渲染的组件
*/
import React from "react";

const Demo = function Demo(props) { 
    console.log('Demo中的属性：', props);
    
    return <div className="demo">
        我是DEMO
    </div>
}

// 执行ProxyTest方法，传递一个组件进来「Component」
const ProxyTest = function ProxyTest(Component) {
    // Component -> Demo
    return function HOC(props) {
        // props：{x: 10, y: 20, enable: true}
        return <Component {...props} />;
    }
}

// 把函数执行的结果「应该是一个组件」，基于ES6Module规范导出，供App导入使用
// 当前案例中，我们导出的是HOC「HOC：higher-order-component」
export default ProxyTest(Demo);