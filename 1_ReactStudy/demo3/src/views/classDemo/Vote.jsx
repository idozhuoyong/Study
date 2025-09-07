import React from "react";
import './Vote.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';

/*
父子组件通信：
    @1 父亲想把信息传递给儿子 => 基于属性
    @2 儿子想改父亲的数据 => 父亲把修改自己数据的“方法”，基于属性传递
    @3 父亲想把一些 HTML 结构传递给儿子 => 基于属性中的 children「插槽」
    @4 父亲再调用儿子的时候，可以给儿子设置 ref，一次获取儿子的实例（或者儿子中暴露的数据和方法）
 */
class Vote extends React.Component {

    state = {
        supNum: 10,
        oppNum: 0
    }

    // 设置为箭头函数，不论方法在哪执行的，方法中的 this 永远都是Vote 父组件的实例
    change = (type) => { 
        let { supNum, oppNum } = this.state;
        if (type === 'sup') {
            this.setState({ supNum: supNum + 1 });
            return;
        }
        this.setState({ oppNum: oppNum + 1 });
    }

    render() {
        let { supNum, oppNum } = this.state;
        return <div className="vote-box">
            <div className="header">
                <h2 className="title">React是很棒的前端框架</h2>
                <span className="num">{supNum + oppNum}</span>
            </div>
            <VoteMain supNum={supNum} oppNum={oppNum} />
            <VoteFooter change={this.change} />
        </div>;
    }
}

export default Vote;