import React from "react";
import Nav from "./AppComp/Nav";
import Menu from "./AppComp/Menu";
import './App.less'

const App = function App() {
    return <div className="home-box">
        <Nav />
        <Menu />
        <div className="box">我是内容</div>
    </div>;
}

export default App;