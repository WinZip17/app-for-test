import React from 'react';
import {autoriz} from "./pageSvg";
import comp from "../media/comp.png";
import {Field, reduxForm} from "redux-form";
import '../css/LoginForm.css';

const LoginForms = (props) => {
    return (
        <div>
            <div className="loginForm d-flex">
                <button type="button" className="close position-absolute closeButton ml-auto " aria-label="Close"
                        onClick={() => {
                            props.setLogin(false)
                        }}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="px-xl-5 loginInputBackground h-100">
                    <div className="text-left">
                        {autoriz}
                        <form className="mt-xl-0 mt-4">
                            <div className="form-group mb-xl-2 mb-5">
                                <label className='labelInput' htmlFor="my_id">TrueConf ID</label>
                                <Field name={'my_id'} legendname="TrueConf ID" placeholder="my_id" id='my_id'
                                       component='input'
                                       type="text" className="form-control border-top-0 border-right-0 border-left-0 "/>
                            </div>
                            <div className="form-group mb-xl-2 mb-5">
                                <Field name={'password'} legendname="Пароль" placeholder="Пароль" id='password'
                                       component='input'
                                       type="password"
                                       className="form-control border-top-0 border-right-0 border-left-0"/>
                            </div>
                            <div className="custom-control custom-checkbox my-1 mr-sm-2 mb-xl-2 mb-3">
                                <Field name='remember' id='remember' component='input'
                                       type="checkbox" className="custom-control-input "/>
                                <label className="custom-control-label loginFormRememberMe" htmlFor="remember">Запомнить
                                    меня</label>
                            </div>
                            <div>
                                <button className="btn btn-primary d-block w-100"> войти</button>
                            </div>
                            <div className="loginFormUrlSell text-center pt-2">
                                <a className="loginFormUrl mr-xl-4" href="/readme">Забыли пароль?</a>
                                <br className="d-xl-none d-inline"/>
                                <a className="loginFormUrl" href="/callme"> Получить учетную запись </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-50 h-100 d-none d-xl-flex align-self-center align-items-center loginImageBackground">
                    <img src={comp} alt={comp} className="compLogin"/>
                </div>
            </div>
            <div className="loginFormSell" onClick={() => {
                props.setLogin(false)
            }}/>
        </div>
    );
};

const LoginFormsRedux = reduxForm({
    form: 'infoUser'
})(LoginForms);

export default LoginFormsRedux;