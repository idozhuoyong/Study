import React from "react";
import Nav from "./AppComp/Nav";
import Menu from "./AppComp/Menu";
// import './App.less'
import Demo from './AppComp/Demo';

const App = function App() {
    return <div className="home-box">
        <Nav />
        <Menu />
        {/* <div className="box">我是内容</div> */}
        {/* <Demo x={10} y={20} enable={true} /> */}
    </div>;
}

export default App;