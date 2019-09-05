import React from 'react';
import {tablo} from "./pageSvg";
import groupPeople from '../media/Group 1556.png'
import accountCircle from '../media/ic_account_circle_24px.png'
import calendar from '../media/calendar.png'
import loadFile from '../media/Group 1553.png'
import key from '../media/key.png'
import contact from '../media/contact.png'
import '../css/Article.css';

const Article = (props) => {

    return (
        <article className="h-auto">
            <div className="pt-xl-5 pr-xl-5 pl-xl-5 pb-xl-0">
                <div className="p-xl-5 d-flex flex-xl-row flex-column articleBackground pt-xl-0 pt-3">
                    <div className="d-flex flex-column col-sm">
                        <div className="d-flex flex-column align-self-center w-100 h-75 mb-2">
                            <div className="align-self-center" ><button className="btn btn-primary buttonWidth btn-lg buttonFontSize"> <img className="buttonImg" src={loadFile} alt={loadFile}/> СКАЧАТЬ ПРИЛОЖЕНИЕ </button></div>
                            <p className="textArticle text-center">Скачайте приложение, чтобы начать
                                проводить видеоконференции прямо
                                сейчас.</p>
                        </div>
                        <div className="d-flex flex-column align-self-center w-100">
                            <div className="align-self-center"> <button className="btn btn-danger buttonWidth btn-lg buttonFontSize"> <img className="buttonImg" src={accountCircle} alt={accountCircle}/> СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ </button></div>
                            <p className="textArticle text-center"> Если у вас ещё нет учётной записи,
                                создайте её.</p>
                        </div>
                    </div>
                    <div className="col-sm d-none d-xl-block">
                        <div >{tablo}</div>
                    </div>
                    <div className="d-flex flex-column col-sm">
                        <div className="d-flex flex-column align-self-center w-100 h-75">
                            <div className="align-self-center"><button className="btn btn-success buttonWidth btn-lg buttonFontSize" onClick={() => {props.setLogin(true)}}> <img className="buttonImg" src={calendar} alt={calendar}/> ЗАПЛАНИРОВАТЬ КОНФЕРЕНЦИЮ </button></div>
                            <p className="textArticle text-center">Планируйте видеоконференции и
                                вебинары со входом по ссылке.</p>
                        </div>
                        <div className="d-flex flex-column align-self-center w-100">
                            <div className="align-self-center"> <button className="btn btn-warning buttonWidth btn-lg buttonFontSize"> <img className="buttonImg" src={groupPeople} alt={groupPeople}/> ПОДКЛЮЧИТЬСЯ К КОНФЕРЕНЦИИ </button></div>
                            <p  className="textArticle text-center">Если вы знаете CID конференции, вы можете подключиться к ней прямо в браузере.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-xl-row flex-column justify-content-center align-items-center">
                <button className="btn btn-outline-dark btn-sm m-xl-4 m-2 buttonFontSize"> <img className="buttonImg"  src={key} alt={key}/> Вход для администратора </button>
                <button className="btn btn-outline-dark btn-sm m-xl-4 m-2 buttonFontSize"> <img className="buttonImg"  src={contact} alt={contact}/> Связь с администратором </button>
            </div>
        </article>
    );
}

export default Article;