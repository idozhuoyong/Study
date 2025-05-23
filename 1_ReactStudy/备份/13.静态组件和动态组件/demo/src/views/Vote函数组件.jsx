/*
 函数是“静态组件”
    第一次渲染组件，把函数执行
        + 产生一个私有的上下文「EC(V)」
        + 把解析出来的 props「含 children」传递进来「但是被冻结了」
        + 对函数返回的 JSX 元素「virtualDOM」进行渲染
    当我们点击按钮的时候，会把绑定的小函数执行：
        + 修改上级上下文EC(V)中的变量
        + 私有变量值发生了变化「supNUm、oppNum」
        + 但是“视图不会更新”
    => 也就是，函数组件第一次渲染完毕后，组件中的内容，不会根据组件内的某些操作，再进行更新，所以称它为静态组件
    => 除非在组件中，重新调用这个函数组件「可以传递不同的属性信息」

真实项目中，
    小部分需求，第一次渲染后就不在变化的，可以使用函数组件
    大部分需求，都需要在第一次渲染完毕后，基于组件内部某些操作，让组件可以更新，以此呈现不同的效果
        ===> 「类组件，Hooks组件(在函数组件中，使用 Hooks 函数)」
 */
const Vote = function Vote(props) {
    let { title } = props;
    let supNum = 10;
    let oppNum = 5;

    return <div className="vote-box">
        <div className="header">
            <h2 className="title">{title}</h2>
            <span>{supNum + oppNum}人</span>
        </div>
        <div className="main">
            <p>支持人数：{supNum}人</p>
            <p>反对人数：{oppNum}人</p>
        </div>
        <div className="footer">
            <button onClick={() => { 
                supNum++;
            }}>支持</button>
            <button onClick={() => { 
                oppNum++;
            }}>反对</button>
        </div>
    </div>
}

export default Vote