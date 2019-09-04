import React from 'react';
import {autoriz, buttonLogin, comp, forgotPas, regist, remember} from "./pageSvg";
import {Field, reduxForm} from "redux-form";


const LoginForms = () => {
    return (
        <div className="loginForm d-flex px-5">
            <div>
                <div>
                    {autoriz}
                    <form className="d-flex flex-column">
                        <Field name={'my_id'} legendname="TrueConf ID" placeholder="my_id" id='my_id' component='input'
                               type="text"/>
                        <Field name={'password'} legendname="Пароль" placeholder="Пароль" id='password' component='input'
                               type="password"/>
                        <Field name={'remember'} placeholder="Пароль" id='remember' component='input'
                               type="checkbox"/> {remember}
                        <div> {buttonLogin} </div>
                        <button className="btn btn-warning"> войти </button>
                        <div>{forgotPas} {regist}</div>
                    </form>
                </div>
            </div>
            <div>
                <button type="button" className="close position-absolute fixed-top" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {comp}
            </div>
            <div className="loginFormSell"/>
        </div>
    );
};

const LoginFormsRedux = reduxForm({
    form: 'infoUser'
})(LoginForms);

export default LoginFormsRedux;