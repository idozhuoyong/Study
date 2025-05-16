import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoOne from '@/views/DemoOne';
// import { createElement } from './jsxHandle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {/* <DemoOne title="标题" x={10} data={[100, 200]} className="box" style={{ fontSize: "20px" }} /> */}
    <DemoOne title="标题" x={10} data={[100, 200]} className="box" style={{ fontSize: "20px"}} children="aa">
      <span>呵呵</span>
      <span>哈哈</span>
    </DemoOne>
  </>
)


console.log(
  React.createElement(DemoOne, {
    title: "标题",
    x: 10,
    data: [100, 200],
    className: "box",
    style: {
      fontSize: "20px"
    }
  })
);

