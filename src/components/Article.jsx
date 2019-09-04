import React from 'react';
import {button1xl, button2xl, button3xl, button4xl, button5, button6, text1xl, text2xl, text3xl, text4xl, tablo} from "./pageSvg";
import groupPeople from '../media/Group 1556.png'
import accountCircle from '../media/ic_account_circle_24px.png'
import calendar from '../media/calendar.png'
import loadFile from '../media/Group 1553.png'
import key from '../media/key.png'
import contact from '../media/contact.png'


const Article = () => {
    return (
        <article className="h-auto">
            <div className="pt-xl-5 pr-xl-5 pl-xl-5 pb-xl-0">
                <div className="p-xl-5 d-flex flex-xl-row flex-column articleBackground">
                    <div className="d-flex flex-column col-sm py-4">
                        <div className="d-flex flex-column align-self-start mb-auto">
                            <button className="btn btn-primary"> <img src={loadFile} alt={loadFile}/> СКАЧАТЬ ПРИЛОЖЕНИЕ </button>
                            <p className="textArticle text-center">Скачайте приложение, чтобы начать
                                проводить видеоконференции прямо
                                сейчас.</p>
                        </div>
                        <div className="d-flex flex-column align-self-end mt-auto">
                            <button className="btn btn-danger"> <img src={accountCircle} alt={accountCircle}/> СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ </button>
                            <p className="textArticle text-center"> Если у вас ещё нет учётной записи,
                                создайте её.</p>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm d-none d-xl-block">{tablo}</div>
                    </div>
                    <div className="d-flex flex-column col-sm py-4">
                        <div className="d-flex flex-column align-self-start mb-auto">
                            <button className="btn btn-success"> <img src={calendar} alt={calendar}/> ЗАПЛАНИРОВАТЬ КОНФЕРЕНЦИЮ </button>
                            <p className="textArticle text-center">Планируйте видеоконференции и
                                вебинары со входом по ссылке.</p>
                        </div>
                        <div className="d-flex flex-column align-self-end mt-auto">
                            <button className="btn btn-warning"> <img src={groupPeople} alt={groupPeople}/> ПОДКЛЮЧИТЬСЯ К КОНФЕРЕНЦИИ </button>
                            <p  className="textArticle text-center">Если вы знаете CID конференции, вы можете подключиться к ней прямо в браузере.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-xl-row flex-column justify-content-center align-items-center">
                <button className="btn btn-outline-dark btn-sm m-4"> <img src={key} alt={key}/> Вход для администратора </button>
                <button className="btn btn-outline-dark btn-sm m-4"> <img src={contact} alt={contact}/> Связь с администратором </button>
            </div>
        </article>
    );
}

export default Article;