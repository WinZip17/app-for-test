import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import SingIn from "./SingInReducer";


export let reducers = combineReducers({
    singIn: SingIn,
    form: formReducer
});

let store = createStore(reducers,
    applyMiddleware(thunk));

window.store = store;

export default store;
