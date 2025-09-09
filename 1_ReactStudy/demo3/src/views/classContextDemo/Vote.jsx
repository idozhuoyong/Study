import React from "react";
import './Vote.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import ThemeContext from "@/ThemeContext";

/*
第一步：创建一个下文对象（ThemeContext）
第二步：让祖先组件Vote，具备状态和修改状态的方法，同时还需要把这些信息，存储到上下文中
    + 基于 <ThemeContext.Provider></ThemeContext.Provider> 组件，在祖先中存储信息
    + 当祖先更新时，重新执行render，会重新存储信息
第三步：在后代组件中，我们需要获取上下文中的信息
    + VoteMain：获取信息绑定即可
    + VoteFooter：获取信息，把获取的函数在相应时机执行
*/
class Vote extends React.Component {
    state = {
        supNum: 10,
        oppNum: 0,
    }

    change = type => { 
        let { supNum, oppNum } = this.state;
        if (type === 'sup') {
            this.setState({ supNum: supNum + 1 });
            return
        }
        this.setState({ oppNum: oppNum + 1 });
    }

    render() {
        let { supNum, oppNum } = this.state;
        return <ThemeContext.Provider
            value={{
                supNum,
                oppNum,
                change: this.change
            }}>
            <div className="vote-box">
                <div className="header">
                    <h2 className="title">React是很棒的前端框架</h2>
                    <span className="num">{supNum + oppNum}</span>
                </div>
                <VoteMain />
                <VoteFooter />
            </div>
        </ThemeContext.Provider>;
    }
}

export default Vote;