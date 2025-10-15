/* 
合并各个模块的reducer，最后创建出一个总的reducer
    const reducer = combineReducers({
        vote: voteReducer,
        personal: personalReducer
    });
    + reducer：是最后合并的总的reducer
    + 此时容器中公共状态，会按照我们设置的成员名称，按模块进行管理
        state = {
            vote: {
                supNum: 10,
                oppNum: 5,
                num: 0
            },
            personal: {
                num: 100,
                info: null
            }
        }

*/
// import { combineReducers } from "redux";
import combineReducers from "../myredux-combineReducers";
import voteReducer from "./voteReducer";
import personalReducer from "./personalReducer";

const reducer = combineReducers({
    vote: voteReducer,
    personal: personalReducer
});
export default reducer;