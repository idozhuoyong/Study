import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 需求二：从服务器获取了一组列表数据，循环动态绑定相关内容 */
let data = [{
  id: 1,
  title: '学习 React'
}, {
  id: 2,
  title: '坚持下去'
}, {
  id: 3,
  title: '学好 React'
}]

root.render(
  <>
    <h2 className='title'>今日新闻</h2>
    <ul className='news-box'>
      {
        data.map((item, index) => {
          // 循环创建的元素一定要设置 key 属性，属性值是本次循环的唯一值「优化 DOM-DIFF 用」
          return <li key={index}>
            <em>{item.id}</em>
            &nbsp;&nbsp;
            <span>{item.title}</span>
          </li>
        })
      }
    </ul>

    {/* 扩展需求，没有数组，就是想单独循环五次 */}
    {
      new Array(5).fill(null).map((_, index) => {
        return <button key={index}>按钮{index + 1}</button>
      })
    }
  </>
)


/** 需求一：基于数据的值，来判断元素的显示隐藏 */
// let flag = true,
//   isRun = false;
// root.render(
//   <>
//     {/* 方式一：元素渲染，控制样式显示隐藏 */}
//     <button style={{
//       display: flag ? "block" : 'none'
//     }}>按钮 1</button>
//     <br />
//     {/* 方式二：控制元素是否渲染 */}
//     {flag ? <button>按钮 2</button> : null}

//     <br />
//     <button>{isRun ? '正在处理中' : '立即提交注册'}</button>
//   </>
// )

// root.render(
//   <>
//     <h2 className='box' style={{
//       color: "red",
//       fontSize: "18px"
//     }}>我在学习 React</h2>
//   </>
// );
