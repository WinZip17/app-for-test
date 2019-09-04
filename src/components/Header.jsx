import React from 'react';
import {headerButton, logo, selectLang} from "./pageSvg";
import lock from "../media/lock.png";



const Header = () => {
    return (
        <header className='d-flex  flex-column-reverse flex-xl-row justify-content-between align-items-center'>
                <div className="m-5">
                    {logo}
                </div>
                <div className="m-5 d-flex flex-row justify-content-between align-items-center">
                    <div className="mr-4 cursorPointer">
                        {selectLang}
                    </div>
                    <button className="btn btn-outline-light btn-sm"><img src={lock} alt={lock}/> Личный кабинет </button>
                </div>
        </header>
    );
};

export default Header;