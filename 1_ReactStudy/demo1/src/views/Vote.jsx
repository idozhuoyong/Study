/*
创建类组件
    + 创建一个构建函数(类)，要求必须集成 React.Component/PureComponent 这个类
        + 我们习惯于使用 ES6 中的 class 创建类「因为方便」
        + 必须给当前类设置一个 render 方法「放在其原型上」：render 方法中，返回需要渲染的视图

    从调用类组件「new Vote（{...}）」开始，类组件内部发生的事情
        1. 初始化属性 & 规则校验
            先规则校验，校验完毕后，在处理属性的其他操作
            方案一：
            constructor(props) { 
                super(props) // 会把传递进来的属性挂载到 this 实例上
                console.log(this.props) // 获取传递的属性
            }
            方案二：即便我们自己不在constructor中处理「或者constructor都没写」，在constructor处理完毕后，React内部也会把传递的 props 挂载到实例上；所以在其他函数中，只要保证 this 是实例，就可以基于 this.props 获取传递的属性
                + 同样 this.props 获取的属性对象也是被冻结的「只读的」Object.isFrozen(this.props) -> true
            --------
            设置规则校验

        2. 初始化状态
            状态：后期修改状态，可以触发视图的更新
            需要手动初始化，如果我们没有去做相关的处理，则默认会往实例上挂载一个 state，初始值是 null => this.state=null
            手动处理：
            state = { ... };
            ------- 修改状态，控制视图更新
            this.state.xxx = xxx; 这种操作仅仅是修改了状态值，但是无法让视图更新
            想让视图更新，我们需要基于 React.Component.prototype 提供的方法操作：
                @1 this.setState(partialState) 既可以修改状态，也可以让视图更新
                    + partialState: 部分状态
                    this.setState({ xxx: xxx })
                @2 this.forceUpdate() 强制更新

        3. 触发 componentWillMount 周期函数（钩子函数）：组件第一次渲染之前
            钩子函数：在程序运行到某个阶段，我们可以提供一个处理函数，让开发者在这个阶段做一些自定义的事情
            + 此周期函数，目前是不安全的「虽然可以用，但是未来可能要被移除，所以不建议使用」
                + 控制台会抛出黄色警告「为了不抛出警告，我们可以暂时用 UNSAFE_componentWillMount」
            + 如果开启了 React.StrictMode「React的严格模式」，我们使用 UNSAFE_componentWillMount 这样的周期函数，控制台会抛出红色警告错误
                React.StrictMode VS "use strict"
                + "use strict": JS的严格模式
                + React.StrictMode: React的严格模式，它会去检查 React 中一些不规范的语法、或者是一些不建议使用的 API 等

        4. 触发 render 周期函数：渲染

        5. 触发 componentDidMount 周期函数：第一次渲染完毕
            + 页面中已经创建了真实的 DOM 元素「所以我们可以获取真实 DOM 了」
    
    组件更新的逻辑「第一种：组件内部的状态被修改，组件会更新」
        1. 触发 shouldComponentUpdate 周期函数：是否允许更新
            shouldComponentUpdate(nextProps, nextState) { 
                // nextState: 储存要修改的最新状态
                // this.state: 存储的还是修改前的状态「此时状态还没有修改」
                console.log(this.state, nextState);
                // 此周期函数需要返回true/false
                // true: 允许更新
                // false: 不允许更新
                return true;
            }
        2. 触发 componentWillUpdate 周期函数：更新之前
            + 此周期函数也是不安全的
            + 在这个阶段，状态还没有被修改
        3. 修改状态值/属性值「让this.state.xxx改为最新值」
        4. 触发 render 周期函数：组件更新
            + 按照最新的状态/属性，把返回的 JSX 编译为 virtualDOM
            + 和上一次渲染的virtualDOM进行对比「DOM-DIFF」
            + 把差异的部分进行渲染「渲染为真实的 DOM」
        5. 触发 componentDidUpdate 周期函数：组件更新完毕
        特殊说明：如果我们是基于 this.forceUpdate() 强制更新视图，会跳过 shouldComponentUpdate周期函数的校验，直接从 willUpdate 开始进行更新「也就是：视图一定会更新」
    
    组件更新的逻辑「第一种：父组件更新，触发的子组件更新」
        1. 触发 componentWillReceiveProps 周期函数：接收最新属性之前
            + 周期函数是不安全的
            UNSAFE_componentWillReceiveProps(nextProps) { 
                // this.props: 存储之前的属性
                // nextProps：传递进来的最新属性值
                console.log('componentWillReceiveProps', this.props, nextProps);
            }
        2. 触发 shouldComponentUpdate 周期函数
        ...(后面的流程和组件内部修改状态一致)
    
    组件卸载的逻辑：
        1. 触发 componentWillUnmount 周期函数：组件销毁之前
        2. 销毁

    父子组件嵌套，处理机制上遵循深度优先原则：父组件在处理中，遇到子组件，一定是先把子组件处理完，父组件才能继续处理
        + 父组件第一次渲染：
            父willMount -> 父render[子willMount -> 子render -> 子didMount] -> 父didMount
        + 父组件更新：
            父shouldUpdate -> 父willUpdate -> 父render[子willReceiveProps -> 子shouldUpdate -> 子willUpdate -> 子render -> 子didUpdate] -> 父didUpdate
        + 父组件销毁
            父willUnmount -> 处理中[子willUnmount -> 子销毁] -> 父销毁 
*/
import React from "react";
import PropTypes from "prop-types";

class Vote extends React.Component {
    // 默认值
    static defaultProps = {
        num: 0 // 有默认值，即使外部没输，类型校验也会认为输了
    }
    // 类型校验
    static propTypes = {
        title: PropTypes.string.isRequired,
        num: PropTypes.number.isRequired
    }
    // 初始化状态
    state = {
        supNum: 10,
        oppNum: 5
    };

    render() {
        console.log("render 渲染");
        // console.log(this);
        let { title } = this.props;
        let { supNum, oppNum } = this.state;

        return <div className="vote-box">
            <div className="header">
                <h2 className="title">{ title }</h2>
                <span>{ supNum + oppNum }人</span>
            </div>
            <div className="main">
                <p>支持人数：{ supNum }人</p>
                <p>反对人数：{ oppNum }人</p>
            </div>
            <div className="footer">
                <button onClick={() => {
                    this.setState({
                        supNum: supNum + 1
                    })
                }}>支持</button>
                <button onClick={() => {
                    // this.setState({
                    //     oppNum: oppNum + 1
                    // })
                    this.state.oppNum++;
                    this.forceUpdate()
                }}>反对</button>
            </div>
        </div>
    }

    // componentWillMount() { } // 有警告
    UNSAFE_componentWillMount() { // 无警告
        console.log("componentWillMount 第一次渲染之前")
    }

    componentDidMount() { 
        console.log("componentDidMount 第一次渲染完毕");
        
    }

    shouldComponentUpdate(nextProps, nextState) { 
        // nextState: 储存要修改的最新状态
        // this.state: 存储的还是修改前的状态「此时状态还没有修改」
        console.log('shouldComponentUpdate', this.state, nextState);

        // 此周期函数需要返回true/false
        // true: 允许更新
        // false: 不允许更新
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', this.state, nextState);
        
    }

    componentDidUpdate() { 
        console.log("componentDidUpdate：组件更新完毕");
        
    }

    // componentWillReceiveProps(nextProps) { 
    UNSAFE_componentWillReceiveProps(nextProps) { 
        console.log('componentWillReceiveProps', this.props, nextProps);
    }

    componentWillUnmount() { 
        console.log('componentWillUnmount: 组件销毁之前')
    }
}

// 默认值
// Vote.defaultProps = {
//     num: 0
// }

// 类型校验
// Vote.propTypes = {
//     title: PropTypes.string.isRequired,
//     num: PropTypes.number.isRequired
// }

export default Vote


/*
    函数组件是”静态组件“
        + 组件第一次渲染完毕后，无法基于内部的某些操作，让组件更新「无法实现”自更新“」，但是，如果调用它的父组件更新，那么相关子组件一定会更新「可能传递最新的属性值进来」
        + 函数组件具备：属性...「其它状态等内容几乎没有」
        + 优势：比类组件处理的机制简单，这样导致函数组件渲染速度更改

    类组件是”动态组件“
        + 组件在第一次渲染完毕后，除了父组件更新可以触发其更新，我们可以通过：this.setState 修改状态 或者 this.fourceUpdate 等方式，让组件实现”自更新“
        + 类组件具备：属性、状态、周期函数、ref...「几乎组件应该有的东西它都具备」
        + 优势：功能强大

    ====> Hooks组件「推荐」：具备了函数组件和类组件的各自优势，在函数组件的基础上，基于hooks函数，让函数组件也可以拥有状态、周期函数等，让函数组件也可以实现自更新「动态化」
 */