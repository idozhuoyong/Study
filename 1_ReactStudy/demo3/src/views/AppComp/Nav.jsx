import React from "react";
// import './Nav.less';
import sty from './Nav.module.css';

const Nav = function Nav() {
    return <nav className={sty.box}>
        <h2 className={sty.title}>购物商场</h2>
        <div className={sty.list}>
            <a href="a">首页</a>
            <a href="a">秒杀</a>
            <a href="a">我的</a>
        </div>
        <span className={sty.link}>aa</span>
    </nav>
}

export default Nav;