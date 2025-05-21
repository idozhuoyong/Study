import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoOne from '@/views/DemoOne1';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        {/* <DemoOne title="标题1" x={10}>
            <span>呵呵</span>
            <span>哈哈</span>
        </DemoOne>

        <DemoOne title="标题2">
            <span>嘿嘿</span>
        </DemoOne>

        <DemoOne title="标题3"></DemoOne>

        <DemoOne title="标题4"/> */}

        <DemoOne title="标题1" x={10}>
            <div slot='footer'>我是页脚</div>
            <div slot='header'>我是页眉</div>
            <div>==内容==</div>
        </DemoOne>
    </>
)

