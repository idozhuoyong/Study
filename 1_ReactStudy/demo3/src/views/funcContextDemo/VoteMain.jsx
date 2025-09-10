import React, { useContext } from "react";
import ThemeContext from '@/ThemeContext';

// 方式一
const VoteMain = function VoteMain() {
    let { supNum, oppNum } = useContext(ThemeContext);
    let ratio = '--',
        total = supNum + oppNum;
    if (total > 0) { ratio = (supNum / total * 100).toFixed(2) + '%'; }
    return <div className="main">
        <p>支持人数：{supNum}人</p>
        <p>反对人数：{oppNum}人</p>
        <p>支持比率：{ratio}</p>
    </div>;
};

// 方式二
// const VoteMain = function VoteMain() {
//     return <ThemeContext.Consumer>
//         {context => { 
//             let { supNum, oppNum } = context;
//             let ratio = '--',
//                 total = supNum + oppNum;
//             if (total > 0) ratio = (supNum / total * 100).toFixed(2) + '%';
//             return <div className="main">
//                 <p>支持人数：{supNum}人</p>
//                 <p>反对人数：{oppNum}人</p>
//                 <p>支持比率：{ratio}</p>
//             </div>;
//         }}
//     </ThemeContext.Consumer>;
// };
export default VoteMain;