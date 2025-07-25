import PropTypes from "prop-types";
import React from "react";
// console.log(React)

const DemoOne = function DemoOne(props) {
    let { title, children } = props
    // let { x = 0 } = props
    // 自定义 children 处理
    // if (!children) {
    //     children = []
    // } else if (!Array.isArray(children)) {
    //     children = [ children ]
    // }
    // 利用 React.Children 的内置方法处理(count/forEach/map/only/toArray)
    children = React.Children.toArray(children)

    let headerSlot = [];
    let footerSlot = [];
    let defaultSlot = [];
    children.forEach(child => {
        // 传递进来的插槽信息，都是 virtualDOM 对象
        let { slot } = child.props
        if (slot === 'header') {
            headerSlot.push(child)
        } else if (slot === 'footer') {
            footerSlot.push(child)
        } else {
            defaultSlot.push(child)
        }
    });

    return <div className="demo-box">

        {/* {children[0]}
        <h2 className="title">{title}</h2>
        <span>{x}</span>
        <br />
        {children[1]} */}

        {/* {children[0]} */}
        {headerSlot}
        <h2 className="title">{title}</h2>
        {defaultSlot}
        {/* {children[1]} */}
        {footerSlot}
    </div>;
}

// 通过把函数当做对象，设置静态的私有属性方法，来给其设置属性的校验规则
// 「15.5之后不推荐，react19已废弃」
// DemoOne.defaultProps = {
//     x: 0
// };

// 参数校验
// 「15.5之后不推荐，react19已废弃」
DemoOne.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.number
}

export default DemoOne;