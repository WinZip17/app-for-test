import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid footerBackground py-1">
            <div className="mx-4">
                <div className="d-flex flex-xl-row flex-column justify-content-between">
                    <div className="d-flex flex-column">
                        <p className="textFooter my-1">Сервер: trueconf_server.name.vcs</p>
                        <p className="textFooter my-1">Служба работает на ПО для видеоконференцсвязи TrueConf Server
                            версии %version. Подробнее на <a href="www.trueconf.ru">www.trueconf.ru</a></p>
                    </div>
                    <div className="mt-auto">
                        <p className="textFooter my-1">© 2010-2018. ООО «Труконф». Все права защищены.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;