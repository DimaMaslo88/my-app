import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate, NavLink} from "react-router-dom";
import {DialogDataType, messageItemDataType, MessagesPageType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {sendNewMessageAC, updateNewMessageAC} from "../redux/messagepage-reducer";
import {TextArea} from "./TextArea/TextArea";


const Dialogs = () => {
    const dispatch = useDispatch()

    let dialogsElements = useSelector<AppRootStateType, DialogDataType[]>
    (state => state.messagesPage.dialogData)
    let dialogUsers = dialogsElements.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)

      let messagesElement = useSelector<AppRootStateType>
    (state => state.messagesPage.messageItemData.map((m: messageItemDataType) =>
        <MessageItem key={m.id} message={m.message} id={m.id}/>))


    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    let messageTextArea = useSelector<AppRootStateType, string>(state => state.messagesPage.newMessageText)
    const sendText = () => {
        dispatch(sendNewMessageAC())
    }
    const updateText = (text: any) => {
        dispatch(updateNewMessageAC(text))
    }

    if (!auth) {
        return < Navigate to={'/login'}/>
    }
    return (

        <div className={style.dialogs}>
            <div className={style.dialogItem}>

                {dialogUsers}


            </div>
            <div className={style.messages}>
                {messagesElement}
                <div>
                    <TextArea messageText={messageTextArea}
                              sendText={sendText}
                              updateText={updateText}
                    />
                </div>


            </div>


        </div>
    )
}


export default Dialogs;