/* Vote模块下的reducer */
import _ from "@/assets/utils";
const initial = {
    supNum: 10,
    oppNum: 5,
    num: 0
};
export default function voteReducer(state = initial, action) { 
    state = _.clone(true, state);
    switch (action.type) {
        case 'VOTE_SUP': 
            state.supNum++
            break;
        case 'VOTE_OPP':
            state.oppNum++;
            break;
        default:
    }
    return state;
};