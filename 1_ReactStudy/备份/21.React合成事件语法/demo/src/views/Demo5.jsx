import React from "react";
import { flushSync } from 'react-dom';
// flushSync:可以刷新“updater 更新队列”，也就是让修改状态的任务立即批处理一次

class Demo extends React.Component {
    state = {
        x: 10,
        y: 5,
        z: 0
    };

    render() {
        console.log("视图渲染：render");
        let { x, y, z } = this.state;

        return <div>
            x: {x}, y: {y}, z: {z}
            <br />
            <button onClick={this.onHandleClick}>按钮</button>
        </div>;
    }

    onHandleClick = () => {
        // let { x, y, z } = this.state;
        // this.setState({
        //     x: x + 1,
        //     y: y + 1,
        //     z: z + 1,
        // });
        // this.setState({ x: x + 1 });
        // setTimeout(() => {
        //     console.log('y', this.state);
        //     this.setState({ y: y + 1 });
        // }, 10);
        // setTimeout(() => {
        //     console.log('z', this.state);
        //     this.setState({ z: z + 1 })
        // }, 0);
        
        let { x, y } = this.state;
        this.setState({ x: x + 1 })
        console.log('1', this.state); // 10/5/0
        flushSync(() => {
            this.setState({ y: y + 1 })
            console.log('2', this.state); // 10/5/0
        }); // 在 flushSync 操作结束后，会立即刷新更新队列
        // 在修改 z 之前，要保证 x/y 都已经更改
        this.setState({ z: this.state.x + this.state.y })
        console.log('3', this.state); // 11/6/0

        /**
         * this.setState(prevState => {
         *  // prevState: 存储之前的状态
         *  // return的对象，就是我们想要修改的新状态值「支持修改部分状态」
         *  return {
         *      x: xxx
         *  }
         * });
         */
        for (let i = 0; i < 20; i++) {
            this.setState(prevState => {
                return {
                    x: prevState.x + 1
                }
            });
        }
    }
}

export default Demo

/*
    this.setState([partialState], [callback])
        [partialState]: 支持部分状态更改
            this.setState({
                x: 100 // 不论总共有多少状态，我们只修改了x，其余的状态不动
            });
        [callback]: 在状态更改，视图更新完毕后触发执行
            + 发生在 componentDidUpdate 周期函数之后「DidUpdate会在任何状态更改后都触发执行；而回调函数方式，可以在指定状态更新完成之后执行」
            + 特殊点，shouldComponentUpdate阻止了状态/视图的更新，DidUpdate周期函数不会执行，但是回调函数依然会被触发执行
            + 类似于Vue框架中的 $nextTick

    在React18中，setState操作都是异步的「不论是在哪执行，例如：合成事件、周期函数、定时器」
        目的：实现状态的批处理「统一处理」
            + 有效减少更新次数，降低性能消耗
            + 有效管理代码执行的逻辑顺序
        原理：利用了更新队列「updater」机制来处理的
            + 在当前相同的时间段内「浏览器此时可以处理的事情中」，遇到setState会立即放入到更新队列中
            + 此时状态/视图还未更新
            + 当所有的代码操作结束，会“刷新队列”「通知更新队列中的任务执行」，把所有放入的setState合并到一起执行，只触发一次视图更新「批处理操作」
 */