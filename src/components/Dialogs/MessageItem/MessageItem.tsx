import React from 'react';
import style from './../Dialogs.module.css';
import {messageItemDataType} from "../../redux/store";


const MessageItem = (props: messageItemDataType) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
}


export default MessageItem;