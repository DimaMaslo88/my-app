import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogDataType} from "../../redux/store";

const DialogItem = (props:DialogDataType) => {
    return <div className={style.dialog + '' + style.activeLink}>
        <NavLink to={"/dialog/" + props.id}>
            {props.name}
        </NavLink>
    </div>
}


export default DialogItem;