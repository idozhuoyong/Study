import React, { useContext, useEffect, useState } from "react";
import './Vote.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import ThemeContext from "./ThemeContext";

const Vote = function Vote() {
    const { store } = useContext(ThemeContext);
    // 获取容器中的公共状态
    let { supNum, oppNum } = store.getState().vote;

    let [_, setNum] = useState(0);
    useEffect(() => {
        store.subscribe(() => {
            setNum(+ new Date() + '' + Math.random());
        });
    }, []);
    
    return <div className="vote-box">
        <div className="header">
            <h2 className="title">React是很棒的前端框架</h2>
            <span className="num">{ supNum + oppNum }</span>
        </div>
        <VoteMain />
        <VoteFooter />
    </div>;
};

export default Vote;