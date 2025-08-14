import React from "react";

class Demo extends React.Component {

    /*
    基于 React 内部的处理，如果我们给合成事件绑定一个“普通函数”，当事件行为触发，绑定的函数执行，方法中的 this 会是 undefined！！
    解决方案：
        + 我们可以基于 JS 中的 bind 方法：预处理函数中的 this 和 实参
            <button onClick={this.handle.bind(this, 10, 20)}>按钮</button>
        + 绑定函数改为“箭头函数”，让其使用上下文中的 this「推荐使用」

    合成事件对象SyntheticBaseEvent  ：我们在 React 合成事件触发的时候，也可以获取到事件对象，只不过此对象是合成事件对象「React 内部经过特殊处理，把各个浏览器的事件统一化后，构建的一个事件对象」
        合成事件对象中，也包含了浏览器内置事件对象中的一些属性和方法「常用基本都有」
        + clientX/clientY
        + pageX/pageY
        + target
        + type
        + preventDefault
        + stopPropagation
        + nativeEvent: 基于这个属性，可以获取浏览器内置「原生」事件对象
    */
    handle1(ev) {
        console.log(this); // undefined
    }
    handle2(x, y, ev) { // Demo.prototype => Demo.prototype.handle = function handle() {}
        // 如果方法经过 bind 处理了，那么最后一个实参，就是传递的合成事件对象
        console.log(this, x, y); // 实例 10 20
    }
    handle3 = (ev) => { // 实例.handle3 = () => {}
        console.log(this); // 实例
        console.log(ev); // SyntheticBaseEvent 合成事件对「React 内部处理兼容性之后的对象」
    }
    handle4 = (x, y, ev) => { 
        console.log(this, x, y, ev); // 当前上下文的实例，10，20，合成事件对象
    }

    render() { 
        /*
        bind在 React 事件绑定中的运用：
            + 绑定的方法是一个普通函数，需要改变函数中的 this 是实例，此时需要用到 bind「很少使用，一般使用箭头函数」
            + 想给函数传递实参，可以基于 bind 预处理「bind 会把合成事件对象以最后一个实参传递给函数」
        */
        return <div>
            <button onClick={this.handle1}>按钮1</button>
            <button onClick={this.handle2.bind(this, 10, 20)}>按钮2</button>
            <button onClick={this.handle3}>按钮3</button>
            <button onClick={this.handle4.bind(null, 10, 20)}>按钮4</button>
        </div>;
    }
}

export default Demo;