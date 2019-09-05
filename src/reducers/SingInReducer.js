import {SET_LOGIN} from "../constants/SingInConst";


let initialState = {
    isLogin: true
};

const SingIn = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN:
            return {...state, isLogin: action.isLogin};
        default:
            return state;
    }
};

export default SingIn;