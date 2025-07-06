import React from "react";

// 检测是否为对象
const isObject = function isObject(obj) { 
    return obj !== null && /^(object|function)$/.test(typeof obj)
}
// 对象浅比较的方法
const shallowEqual = function shallowEqual(objA, objB) { 
    if (!isObject(objA) || !isObject(objB)) return false;
    if (objA === objB) return true;
    // 先比较成员的数量
    let keysA = Reflect.ownKeys(objA),
        keysB = Reflect.ownKeys(objB);
    if (keysA.length !== keysB.length) return false;
    // 数量一致，在逐一比较内部的成员「只比较第一级：浅比较」
    for (let i = 0; i < keysA.length; i++) { 
        let key = keysA[i]
        if (!objB.hasOwnProperty(key) || !Object.is(objA[key], objB[key])) { 
            return false;
        }
    }
    return true
}

class Demo extends React.Component { 
    state = {
        arr: [10, 20, 30]
    }
    render() { 
        let { arr } = this.state
        return <div>
            {arr.map((item, index) => { 
                return <span key={index} style={{
                    display: 'inline-block',
                    width: 100,
                    height: 100,
                    background: 'pink',
                    marginRight: 10
                }}>
                    { item }
                </span>
            })}
            <button onClick={() => { 
                arr.push(40)
                this.setState({
                    arr
                })
            }}>新增 SPAN</button>
        </div>
    }

    // shouldComponentUpdate(nextProps, nextState) { 
    //     let { props, state } = this;
    //     return !shallowEqual(props, nextProps) || !shallowEqual(state, nextState);
    // }
}

export default Demo;


/*
PureComponent 和 Component 的区别
    PureComponent 会给类组件默认加一个 shouldComponentUpdate 周期函数
        + 在此周期函数中，它对新老的属性/状态会做一个浅比较
        + 如果经过浅比较，发现属性/状态并没有改变，则返回 false「也就是不继续更新组件」; 有变化才会去更新
 */