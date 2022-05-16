import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType={
    isAuth:boolean
    login:string|null
}

const Header = ({isAuth,login}: HeaderPropsType) => {
    return <header >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEqO70btC_vEXT-70l1blyQI7cJpT30QFCw&usqp=CAU'/>
        <div className={style.login}>
            {isAuth ? login:  <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}
export default Header;