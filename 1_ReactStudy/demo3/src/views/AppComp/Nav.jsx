import React from "react";
import './Nav.less'

const Nav = function Nav() {
    return <nav className="nav-box">
        <h2 className="title">购物商场</h2>
        <div className="list">
            <a href="a">首页</a>
            <a href="a">秒杀</a>
            <a href="a">我的</a>
        </div>
    </nav>
}

export default Nav;