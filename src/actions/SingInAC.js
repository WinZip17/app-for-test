import {SET_LOGIN} from "../constants/SingInConst";


export const setLoginAC = (isLogin) => ({type: SET_LOGIN, loginForm: isLogin});
