import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOutUser} from "../redux/auth_reducer";
import ButtonUnstyled from "@mui/material/Button";

type HeaderPropsType={
    isAuth:boolean
    login:string|null
}

const Header = ({isAuth,login}: HeaderPropsType) => {
    const dispatch=useDispatch()

    const logOut=()=>{
        dispatch(logOutUser())
    }


    return <header >
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEqO70btC_vEXT-70l1blyQI7cJpT30QFCw&usqp=CAU'/>
        <div className={style.login}>
            {isAuth ?  <div>{login}<ButtonUnstyled onClick={logOut}>LogOut</ButtonUnstyled ></div>
                :  <NavLink to='/login'/>}


        </div>
    </header>
}
export default Header;