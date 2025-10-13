/* personal模块下的reducer */
import _ from "@/assets/utils";
const initial = {
    num: 100,
    info: null
};
export default function personalReducer(state = initial, action) { 
    state = _.clone(true, state);
    switch (action.type) {
        case 'PERSONAL_INFO':
            state.info = action.payload || {};
            break;
        default:
    }
    return state;
};