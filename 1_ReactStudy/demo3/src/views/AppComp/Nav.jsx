import React from "react";
// import './Nav.less';
// import sty from './Nav.module.css';
import { createUseStyles } from 'react-jss';

/*
基于 createUseStyles 方法，构建组件需要的样式
返回结果是一个自定义 Hook 函数
    + 对象中的每个成员就是创建的样式类名
    + 可以类似于less等预编译语言中的“嵌套语法”，给其后代/伪类设置样式

自定义Hook 执行，返回一个对象，对象中包含：
    + 我们创建的样式类名，作为属性名
    + 编译后的样式类名「唯一的」，作为属性值
    {box: 'box-0-2-1', title: 'title-0-2-2', list: 'list-0-2-3'}

而我们在JS中编写的样式，最后会编译为：
    .box-0-2-19 {
      width: 300px;
      background-color: lightblue;
    }
    .title-0-2-20 {
      color: red;
      font-size: 20px;
    }
    .title-0-2-20:hover {
      color: green;
    }
    .list-0-2-21 a {
      color: #000;
      font-size: 16px;
    }
*/
const useStyles = createUseStyles({
    box: {
        backgroundColor: 'lightblue',
        width: '300px'
    },
    title: {
        fontSize: '20px',
        color: 'red',
        '&:hover': {
            color: props => props.color
        }
    },
    list: props => {
        return { 
            // '& a' => .list a {}
            // '&>a' => .list>a {}
            '& a': {
                fontSize: props.fontSize + 'px',
                color: '#000'
            }
        }
    }
});

const Nav = function Nav() {
    // Nav.less 版本
    // return <nav className="nav-box">
    //     <h2 className="title">购物商场</h2>
    //     <div className="list">
    //         <a href="a">首页</a>
    //         <a href="a">秒杀</a>
    //         <a href="a">我的</a>
    //     </div>
    // </nav>

    // Nav.module.css 版本
    // return <nav className={sty.box}>
    //     <h2 className={sty.title}>购物商场</h2>
    //     <div className={sty.list}>
    //         <a href="a">首页</a>
    //         <a href="a">秒杀</a>
    //         <a href="a">我的</a>
    //     </div>
    //     <span className={sty.link}>aa</span>
    // </nav>

    // createUseStyles 版本
    let { box, title, list } = useStyles({
        fontSize: 14,
        color: 'orange'
    });

    return <nav className={box}>
        <h2 className={title}>购物商场</h2>
        <div className={list}>
            <a href="a">首页</a>
            <a href="a">秒杀</a>
            <a href="a">我的</a>
        </div>
    </nav>
}

export default Nav;