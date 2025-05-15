/** 
 * 封装一个对象迭代的方法
 *  + 基于传统的 for/in 循环，会存在一些弊端「性能差（既可以迭代私有的，也可以迭代公有的属性）；只能迭代“可枚举、非 Symbol 类型”的属性」
 *  + 解决思路：获取对象所有的私有属性「私有的，不论是否可枚举，不论类型」
 *      Object.getOwnPropertyNames(arr) -> 获取·对象非 Symbol 类型的私有属性「无关是否可枚举」
 *      Object.getOwnPropertySymbols(arr) -> 获取对象的 Symbol 类型的私有属性
 * 
 *      获取所有私有属性：
 *      let keys = Object.getOwnPropertyNames(arr).concat(Object.getOwnPropertySymbols(arr))
 *      // ES6语法代替「弊端：不兼容 IE」
 *      let keys = Reflect.ownKeys(arr)
 */
const each = function each(obj, callback) {
    if (obj === null || typeof obj !== 'object') {
        throw new TypeError('obj is not a object');
    }

    if (typeof callback !== 'function') {
        throw new TypeError('callback is not a function');
    }

    let keys = Reflect.ownKeys(obj);
    keys.forEach(key => {
        let value = obj[key];
        // 每一次迭代，都执行回调函数
        callback(value, key);
    })
}



/**
 * createElement 创建虚拟 DOM 对象
 * @param {*} ele 
 * @param {*} props 
 * @param  {...any} children 
 * @returns 
 */
export function createElement(ele, props, ...children) {
    let virtualDOM = {
        $$typeof: Symbol('react.transitional.element'),
        key: null,
        ref: null,
        type: null,
        props: {}
    };
    let len = children.length

    virtualDOM.type = ele;

    if (props !== null) {
        virtualDOM.props = {
            ...props
        }
    }

    if (len === 1) {
        virtualDOM.props.children = children[0]
    }

    if (len > 1) {
        virtualDOM.props.children = children
    }

    return virtualDOM
}


/**
 * render: 把虚拟 DOM 变为真实 DOM
 */
export function render(virtualDOM, container) {
    let { type, props } = virtualDOM;
    if (typeof type === 'string') {
        // 创建标签
        let ele = document.createElement(type);

        // 处理标签的属性和子节点
        each(props, (value, key) => {
            // 处理 className
            if (key === "className") {
                ele.className = value;
                return;
            }

            // 处理 style 样式对象
            if (key === "style") {
                each(value, (val, attr) => { 
                    ele.style[attr] = val;
                })
                return;
            }

            // 处理 children
            if (key === "children") {
                let children = value;
                if (!Array.isArray(children)) {
                    children = [children];
                }
                children.forEach((child) => {
                    // string||number
                    if (/^string|number$/.test(typeof child)) {
                        ele.appendChild(document.createTextNode(child))
                        return;
                    }

                    // virtualDOM 对象
                    render(child, ele)
                });
                return;
            }
            
            // 其它普通属性
            ele.setAttribute(key, value);
        })

        // 把标签添加进容器中
        container.appendChild(ele);
        return;
    }
}