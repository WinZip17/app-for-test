import React from 'react';
import {logo, selectLang} from "./pageSvg";
import lock from "../media/lock.png";
import '../css/Header.css';


const Header = (props) => {
    return (
        <header className='d-flex  flex-column-reverse flex-xl-row justify-content-between align-items-center'>
            <div className="m-xl-5 m-2">
                {logo}
            </div>
            <div
                className="m-xl-5 m-2 d-flex flex-row justify-content-between justify-content-xl-end align-items-center w-100">
                <div className="mr-4 cursorPointer">
                    {selectLang}
                </div>
                <button className="btn btn-outline-light btn-sm " onClick={() => {
                    props.setLogin(true)
                }}><img className="buttonImg" src={lock} alt={lock}/> Личный кабинет
                </button>
            </div>
        </header>
    );
};

export default Header;