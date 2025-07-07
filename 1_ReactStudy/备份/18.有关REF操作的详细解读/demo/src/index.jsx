import ReactDOM from 'react-dom/client';
import React from 'react';
// import Dialog from './components/Dialog';
// import Vote from './views/Vote函数组件';
// import Vote from './views/Vote';
// import Demo from './views/Demo2';
// import Demo from './views/Demo3';
import Demo from './views/Demo4';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        {/* <Dialog
            title="友情提示"
            content="要坚持学习，坚持就是胜利"
        />
        <Dialog
            content="我们一定要好好学React"
        >
            <button>确定</button>
            <button>很确定</button>
        </Dialog> */}
        {/* <Vote title="React其实还是很好学的!" /> */}

        <Demo />
    </>
)


/*
render函数在渲染的时候，如果 type 是：
    + 字符串：创建一个标签
    + 普通函数：把函数执行，并把 props 传递给函数
    + 构造函数：把构造函数基于 new 执行「也就是创建类的一个实例，也会把 props 传递进去」
        + 每调用以此组件，就会创建一个实例
        + 把在类组件中编写的 render 函数执行，把 jsx 视图返回
        例如：    
        new Vote({
            title: "React其实还是很好学的!"
        })
 */