import ReactDOM from 'react-dom/client';
// import Dialog from './components/Dialog';
// import Vote from './views/Vote函数组件';
import Vote from './views/Vote';

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
        <Vote title="React其实还是很好学的!" />
    </>
)

